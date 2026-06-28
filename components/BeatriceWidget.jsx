"use client";
/**
 * Beatrice — BEA's AI tutor (React).
 *
 * Visual style matches the live BEA site exactly: 4px navy outline, hard offset
 * shadow, orange CTA pill, pastel mint header, dashed-gold suggestion pills.
 *
 * Behaviour
 *  - Floating pill launcher bottom-right ("Ask Beatrice")
 *  - Slide-in chat panel with starter prompts tuned to the learner's CEFR level
 *  - SSE streaming from /api/ai-tutor (see ../ai-tutor-api-spec.md)
 *  - Persists open/closed + last 20 messages to sessionStorage
 *  - Keyboard: Esc closes, autofocus on open
 *  - Honours prefers-reduced-motion via design-tokens.css
 *
 * Backend contract: ./api-spec.md
 * System prompt:    ./system-prompt.md
 * Sample server:    ./server-example.js
 */
import React, { useCallback, useEffect, useRef, useState } from "react";

const STARTERS_BY_LEVEL = {
  A1: [
    { label: "👋 How do I say hello?",  q: "How do I introduce myself in English?" },
    { label: "🔢 Numbers 1–20",         q: "Help me practise numbers 1 to 20." },
    { label: "🎙️ Quick A1 speaking",    q: "Give me a 1-minute A1 speaking task." },
  ],
  A2: [
    { label: "🕰️ Past vs present perfect", q: "What is the difference between past simple and present perfect?" },
    { label: "🛒 Polite UK shop phrases",  q: "Teach me polite phrases for shopping in the UK." },
    { label: "✍️ A2 writing",              q: "Give me a short A2 writing task." },
  ],
  B1: [
    { label: "🤔 'do' vs 'make'",       q: "What is the difference between 'do' and 'make'?" },
    { label: "💬 Give an opinion",      q: "Help me give an opinion with a reason in English." },
    { label: "🎤 B1 speaking",          q: "Give me a quick speaking exercise for B1." },
  ],
  B2: [
    { label: "🔗 Linking words",        q: "Teach me advanced linking words for B2 writing." },
    { label: "📄 Report writing",       q: "How do I structure a B2 report?" },
    { label: "🚀 Fluency drill",        q: "Give me a B2 fluency drill." },
  ],
  C1: [
    { label: "🪶 Hedging language",     q: "Show me hedging language for academic writing." },
    { label: "🎚️ Register control",     q: "Help me rewrite this sentence in three registers." },
    { label: "🎭 Tone transformation",  q: "Help me rewrite a message for diplomacy." },
  ],
  C2: [
    { label: "🧠 Critical synthesis",   q: "Help me synthesise three sources into one paragraph." },
    { label: "✨ Persuasive nuance",    q: "Show me how to use persuasive nuance in writing." },
    { label: "🇬🇧 Native idioms",       q: "Teach me five native-level British idioms." },
  ],
};

const STORAGE_KEY = "bea_beatrice_v2";

export default function BeatriceWidget({
  userLevel = "B1",
  userName,
  endpoint = "/api/ai-tutor",
  brandName = "Beatrice",
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // Restore
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (Array.isArray(data.messages)) setMessages(data.messages.slice(-20));
        if (typeof data.open === "boolean") setOpen(data.open);
      }
    } catch {}
  }, []);
  // Persist
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages: messages.slice(-20), open }));
    } catch {}
  }, [messages, open]);
  // Auto-scroll
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, busy]);
  // Esc + focus
  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = useCallback(async (text) => {
    if (!text.trim() || busy) return;
    const userMsg = { role: "user", content: text.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setBusy(true);
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
          userLevel,
          userName,
        }),
      });
      if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split("\n\n");
        buffer = events.pop() || "";
        for (const evt of events) {
          const line = evt.split("\n").find((l) => l.startsWith("data:"));
          if (!line) continue;
          const payload = line.slice(5).trim();
          if (payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            if (json.delta) {
              setMessages((m) => {
                const next = m.slice();
                next[next.length - 1] = {
                  role: "assistant",
                  content: (next[next.length - 1].content || "") + json.delta,
                };
                return next;
              });
            }
          } catch {}
        }
      }
    } catch (err) {
      setMessages((m) => {
        const next = m.slice();
        next[next.length - 1] = {
          role: "assistant",
          content: "Sorry — I couldn&rsquo;t reach the tutor service. Please try again in a moment.",
        };
        return next;
      });
      console.error("Beatrice error:", err);
    } finally {
      setBusy(false);
    }
  }, [busy, messages, endpoint, userLevel, userName]);

  const starters = STARTERS_BY_LEVEL[userLevel] || STARTERS_BY_LEVEL.B1;

  return (
    <>
      <button
        className="bea-tutor-launcher"
        aria-label={`Open ${brandName}, your AI English tutor`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="emoji" aria-hidden="true">🦉</span>
        Ask {brandName}
        <span className="pulse-dot" aria-hidden="true"></span>
      </button>

      <div
        className={`bea-tutor-panel ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="false"
        aria-label={`${brandName} chat`}
      >
        <header className="bea-tutor-head">
          <div className="ava" aria-hidden="true">B</div>
          <div className="info">
            <strong>{brandName}</strong>
            <small>Your AI English tutor</small>
            <span className="live">Online · {userLevel}</span>
          </div>
          <button className="bea-tutor-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </header>

        <div className="bea-tutor-body" ref={bodyRef}>
          {messages.length === 0 && (
            <>
              <div className="bea-tutor-msg bot">
                Hello{userName ? ` ${userName}` : ""}! I&rsquo;m {brandName} 👋
                I can help with grammar, vocabulary, pronunciation, or your level pathway.
                What would you like to work on?
              </div>
              <div className="bea-tutor-suggest" role="group" aria-label="Suggested prompts">
                {starters.map((s, i) => (
                  <button key={i} type="button" onClick={() => send(s.q)}>{s.label}</button>
                ))}
              </div>
            </>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`bea-tutor-msg ${m.role === "user" ? "user" : "bot"}`}
              dangerouslySetInnerHTML={m.role === "assistant" ? { __html: m.content } : undefined}
            >
              {m.role === "user" ? m.content : null}
            </div>
          ))}
          {busy && messages.length > 0 && messages[messages.length - 1].content === "" && (
            <div className="bea-tutor-msg bot">
              <span className="bea-typing" aria-label={`${brandName} is typing`}>
                <span></span><span></span><span></span>
              </span>
            </div>
          )}
        </div>

        <form
          className="bea-tutor-foot"
          onSubmit={(e) => { e.preventDefault(); send(input); }}
        >
          <label htmlFor="bea-tutor-input" className="bea-sr-only">Message {brandName}</label>
          <input
            id="bea-tutor-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask ${brandName}…`}
            autoComplete="off"
            disabled={busy}
          />
          <button type="submit" disabled={busy || !input.trim()}>Send</button>
        </form>
      </div>
    </>
  );
}
