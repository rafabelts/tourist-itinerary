import "../assets/base-card.css";

export function BaseCard({ children }: { children: React.ReactNode }) {
  return <div className="base-card">{children}</div>;
}
