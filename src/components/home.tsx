import { Outlet } from "react-router";
import { PlaceCard } from "./place-card";
import { Places } from "../mocks";

export function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1>¿A dónde iremos estas vacaciones?</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        {Places.map((place) => (
          <PlaceCard {...place} />
        ))}
      </div>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
}
