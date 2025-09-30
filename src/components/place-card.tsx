import { Link } from "react-router";
import type { PlaceType } from "../types";
import { BaseCard } from "./base-card";

export function PlaceCard({
  imageUrl,
  imageAlt,
  city,
  country,
  path,
}: PlaceType) {
  return (
    <Link to={path}>
      <BaseCard hoverEnabled={true}>
        <img src={imageUrl} alt={imageAlt} width="250" height="200" />
        <h1>{city}</h1>
        <p>País: {country}</p>
      </BaseCard>
    </Link>
  );
}
