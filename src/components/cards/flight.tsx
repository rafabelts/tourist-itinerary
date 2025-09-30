import { BaseCard } from "../base-card";
import type { Flight } from "../../types";

export function FlightCard({ flights }: { flights: Array<Flight> }) {
  const formatDuration = (duration: string) => {
    const hours = duration.match(/(\d+)H/)?.[1] || "0";
    const minutes = duration.match(/(\d+)M/)?.[1] || "0";
    return `${hours}h ${minutes}m`;
  };

  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleString("es-MX", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderFlights = () => {
    if (!flights || flights.length === 0) {
      return <div>Error fetching flights</div>;
    }

    return flights.map((flight, index) => (
      <div key={index}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginBottom: "8px",
          }}
        >
          {flight.id}
        </h2>
        <p>
          {flight.price.total} {flight.price.currency}
        </p>
        {flight.itineraries.map((itinerary, itinIndex) => (
          <div
            key={itinIndex}
            style={{
              marginTop: itinIndex > 0 ? "16px" : "0",
              paddingLeft: "8px",
            }}
          >
            <p
              style={{
                color: "rgb(250, 204, 21)",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              {itinIndex === 0 ? "Ida" : "Regreso"}
            </p>

            {itinerary.segments.map((segment, segIndex) => (
              <div key={segIndex} style={{ marginBottom: "8px" }}>
                <p style={{ color: "rgb(209, 213, 219)", fontSize: "14px" }}>
                  <span style={{ fontWeight: "600" }}>
                    {segment.departure.iataCode}
                  </span>{" "}
                  →{" "}
                  <span style={{ fontWeight: "600" }}>
                    {segment.arrival.iataCode}
                  </span>
                  {segment.arrival.terminal &&
                    ` (Terminal ${segment.arrival.terminal})`}
                </p>
                <p
                  style={{
                    color: "rgb(156, 163, 175)",
                    fontSize: "13px",
                    marginTop: "2px",
                  }}
                >
                  {formatDateTime(segment.departure.at)} -{" "}
                  {formatDateTime(segment.arrival.at)}
                </p>
                <p
                  style={{
                    color: "rgb(250, 204, 21)",
                    fontSize: "13px",
                    marginTop: "2px",
                  }}
                >
                  Duración: {formatDuration(segment.duration)}
                </p>
              </div>
            ))}

            <p
              style={{
                color: "rgb(156, 163, 175)",
                fontSize: "13px",
                fontStyle: "italic",
              }}
            >
              Total: {formatDuration(itinerary.duration)}
            </p>
          </div>
        ))}
        {index === flights.length - 1 ? <></> : <hr />}
      </div>
    ));
  };

  return (
    <BaseCard>
      <h1 style={{ fontSize: "2.2em" }}>Vuelos</h1>
      {renderFlights()}
    </BaseCard>
  );
}
