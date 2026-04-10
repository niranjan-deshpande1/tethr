import Spine from "@/components/layout/Spine";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Spine />
      <main
        style={{
          marginLeft: "56px",
          flex: 1,
          background: "var(--bg)",
          color: "var(--text)",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
}
