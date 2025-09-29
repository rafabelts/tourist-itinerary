import { Link } from "react-router";

export function BackButton() {
  return (
    <Link to="/">
      <div
        style={{
          width: "3.2rem",
          height: "3.2rem",
          color: "white",
          padding: "0",
          margin: "0",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 30 30"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </Link>
  );
}
