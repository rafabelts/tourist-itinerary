import "../assets/base-card.css";

export function BaseCard({
  children,
  hoverEnabled = false,
}: {
  children: React.ReactNode;
  hoverEnabled?: boolean;
}) {
  return (
    <div className={`base-card ${hoverEnabled ? "hoverable" : ""}`}>
      {children}
    </div>
  );
}
