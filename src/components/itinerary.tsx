import { useEffect, useState } from "react";
import type { ItineraryType } from "../types/itinerary";
import { BackButton } from "../utils/back-button";
import { ActivityCard } from "./cards/activity";
import { HotelCard } from "./cards/hotel";
import type { Activity } from "../types/activity";
import type { Hotel } from "../types";
import { fetchPlaceData } from "../service/fetch-place-data";

export function Itinerary({ city, country, cityCode }: ItineraryType) {
  const [hotels, setHotels] = useState<Array<Hotel>>([]);
  const [activities, setActivities] = useState<Array<Activity>>([]);

  useEffect(() => {
    async function fetchTourismData() {
      const data = await fetchPlaceData(cityCode);

      setHotels(data.hotels);
      setActivities(data.activities);
    }

    fetchTourismData();
  }, [cityCode]);

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <BackButton />
      <h1>
        {city}, {country}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "normal",
          gap: "2rem",
        }}
      >
        <HotelCard hotels={hotels} />
        <ActivityCard activities={activities} />
      </div>
    </div>
  );
}
