// GridBackground.tsx
// Renders a fixed, full-screen grid pattern at the bottom layer

export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)," +
          "linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundPosition: "-1px -1px",
      }}
    />
  );
}
