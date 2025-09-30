import type { Activity } from "../../types";
import { BaseCard } from "../base-card";

export function ActivityCard({ activities }: { activities: Array<Activity> }) {
  const renderActivities = () => {
    if (!activities || activities.length === 0) {
      return <div>Error fetching activities</div>;
    }

    return activities.map((activity, index) => (
      <div key={index}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginBottom: "8px",
          }}
        >
          {activity.name}
        </h2>
        <img src={activity.pictures} width="320" height="280" />
        <p style={{ color: "rgb(250, 204, 21)" }}></p>
        <p>
          Lo terminaras en aproximadamente en {activity.minimumDuration} con un
          precio de{" "}
          <b>
            ${activity.price.amount} {activity.price.currencyCode}{" "}
          </b>
        </p>
        <p>
          Reservalo en:{" "}
          <a href={activity.bookingLink}> {activity.bookingLink}</a>
        </p>

        <p></p>

        {index === activities.length - 1 ? <></> : <hr />}
      </div>
    ));
  };

  return (
    <BaseCard>
      <h1 style={{ fontSize: "2.2em" }}>Actividades</h1>
      {renderActivities()}
    </BaseCard>
  );
}
