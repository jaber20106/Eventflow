import EventCard from "../cards/EventCard";

export default function EventGrid({ events }) {

  return (
    <section className="px-24 pt-8 pb-20 max-w-[1600px] mx-auto">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-bold tracking-[4px] uppercase">
            {events.length} Events
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

      <div className="grid grid-cols-3 gap-10 mt-8">

        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}

      </div>

    </section>
  );
}