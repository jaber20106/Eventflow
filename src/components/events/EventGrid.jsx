import EventCard from "../cards/EventCard";
import events from "@/data/events";

export default function EventGrid({ category }) {

  const filteredEvents =
    category
      ? events.filter(
          (event) => event.slug === category
        )
      : events;

  return (
    <section className="px-24 pt-8 pb-20 max-w-[1600px] mx-auto">

      {/* Top */}
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-bold tracking-[4px] uppercase">
            {filteredEvents.length} Events
          </p>

          <h1 className="text-[32px] leading-none font-bold mt-4">
            All events
          </h1>
        </div>

        <div className="flex items-center gap-16 mt-6">

          <button className="text-xl font-semibold">
            Filters
          </button>

          <button className="text-xl font-semibold">
            Sort: Soonest
          </button>

        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-10 mt-8">

        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>
    </section>
  );
}