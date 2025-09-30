import { BaseCard } from "../base-card";
import type { Hotel } from "../../types";

export function HotelCard({ hotels }: { hotels: Array<Hotel> }) {
  const renderHotels = () => {
    if (!hotels || hotels.length === 0) {
      return <div>Error fetching hotels</div>;
    }
    return hotels.map((hotel, index) => (
      <div key={index}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginBottom: "8px",
          }}
        >
          {hotel.name}
        </h2>
        <p style={{ color: "rgb(250, 204, 21)" }}>
          {"⭐".repeat(hotel.rating)}{" "}
          <span style={{ color: "rgb(156, 163, 175)", fontSize: "14px" }}>
            ({hotel.rating})
          </span>
        </p>
        <p
          style={{
            color: "rgb(209, 213, 219)",
            fontSize: "14px",
            marginTop: "8px",
          }}
        >
          {hotel.address.lines.join(", ")}
        </p>

        {index === hotels.length - 1 ? <></> : <hr />}
      </div>
    ));
  };

  return (
    <BaseCard>
      <h1 style={{ fontSize: "2.2em" }}>Hoteles</h1>
      {renderHotels()}
    </BaseCard>
  );
}
