/**
 * Tiny pill primitives used across the app-card system.
 *
 *   <Badge>A1 · Beginner</Badge>     → sky-blue eyebrow pill
 *   <Chip>Worksheet</Chip>           → slate-100 tag pill (used in module rows)
 *   <BackLink href="/courses">Back to courses</BackLink>
 */
import React from "react";

export function Badge({ children, large = false }) {
  return <span className={"bea-badge" + (large ? " bea-badge--lg" : "")}>{children}</span>;
}
export function Chip({ children }) {
  return <span className="bea-chip">{children}</span>;
}
export function BackLink({ href, children }) {
  return <a className="bea-back" href={href}>← {children}</a>;
}
