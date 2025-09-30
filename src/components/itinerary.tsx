import { useEffect, useRef, useState } from "react";
import type { ItineraryType } from "../types/itinerary";
import { BackButton } from "../utils/back-button";
import { ActivityCard } from "./cards/activity";
import { HotelCard } from "./cards/hotel";
import type { Hotel, Activity, Flight } from "../types";
import { fetchPlaceData } from "../service/fetch-place-data";
import { FlightCard } from "./cards/flight";
import DateRangePicker from "./date-picker";

export function Itinerary({ city, country, cityCode }: ItineraryType) {
  const [hotels, setHotels] = useState<Array<Hotel>>([]);
  const [activities, setActivities] = useState<Array<Activity>>([]);
  const [flights, setFlights] = useState<Array<Flight>>([]);
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState("");
  const fetchedData = useRef(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (!shouldFetch || fetchedData.current) return;
    fetchedData.current = true;
    setLoading(true);

    async function fetchTourismData() {
      try {
        const data = await fetchPlaceData(cityCode, startDate, endDate);
        console.log("response: " + data.flights);
        setHotels(data.hotels);
        setActivities(data.activities);
        setFlights(data.flights);
      } catch (error) {
        console.error("Error fetching tourism data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTourismData();
  }, [shouldFetch, cityCode, startDate, endDate]);

  const handleContinue = () => {
    setShouldFetch(true);
  };

  if (!shouldFetch) {
    return (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <BackButton />
        <h1>¿En qué fecha planeas ir?</h1>
        <DateRangePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onContinue={handleContinue}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <BackButton />
        <div
          style={{ padding: "1rem", textAlign: "center", fontSize: "1.5rem" }}
        >
          Cargando{dots}
        </div>
      </div>
    );
  }

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
        <FlightCard flights={flights} />
      </div>
    </div>
  );
}
