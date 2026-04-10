"use client";

import {
  House,
  Search,
  Calendar,
  FlaskConical,
  MessageSquare,
  Map,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavNode = {
  href: string;
  icon: React.ReactNode;
  label: string;
  isJourney?: boolean;
};

const journeyNodes: NavNode[] = [
  { href: "/app/research", icon: <Search size={18} />, label: "Research", isJourney: true },
  { href: "/app/plan", icon: <Calendar size={18} />, label: "Plan", isJourney: true },
  { href: "/app/validation", icon: <FlaskConical size={18} />, label: "Validation", isJourney: true },
  { href: "/app/outreach", icon: <MessageSquare size={18} />, label: "Outreach", isJourney: true },
  { href: "/app/journey", icon: <Map size={18} />, label: "Journey", isJourney: true },
];

function SpineNode({ href, icon, label }: NavNode) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "40px",
        borderRadius: "6px",
        color: isActive ? "var(--accent)" : "var(--text-faint)",
        transition: "background 150ms ease, color 150ms ease",
        textDecoration: "none",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.color = isActive ? "var(--accent)" : "var(--text)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = isActive ? "var(--accent)" : "var(--text-faint)";
      }}
    >
      {icon}
    </Link>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "24px",
        height: "1px",
        background: "var(--border)",
        margin: "4px auto",
      }}
    />
  );
}

export default function Spine() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "56px",
        height: "100vh",
        background: "var(--bg-elevated)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px 0",
        zIndex: 50,
      }}
    >
      {/* t_ wordmark */}
      <Link
        href="/app"
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "13px",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        t_
      </Link>

      <Divider />

      {/* Home — above journey line */}
      <SpineNode href="/app" icon={<House size={18} />} label="Home" />

      <Divider />

      {/* Journey nodes with connecting line */}
      <div style={{ position: "relative", width: "100%", flex: "0 0 auto" }}>
        {/* Vertical journey line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "20px",
            bottom: "20px",
            width: "2px",
            background: "var(--text-faint)",
            zIndex: 0,
          }}
        />
        {/* Journey nodes */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {journeyNodes.map((node) => (
            <SpineNode key={node.href} {...node} />
          ))}
        </div>
      </div>

      <Divider />

      {/* Settings — pushed to bottom */}
      <div style={{ marginTop: "auto" }}>
        <SpineNode href="/app/settings" icon={<Settings size={18} />} label="Settings" />
      </div>
    </nav>
  );
}
