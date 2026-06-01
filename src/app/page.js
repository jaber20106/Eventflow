import Navbar from "@/components/navbar/Navbar";
import CategoryBar from "@/components/category/CategoryBar";
import EventGrid from "@/components/events/EventGrid";

import { getEvents } from "@/lib/events";

export default async function Home({
  searchParams,
}) {

  const category =
    (await searchParams).category || "";

  const search =
    (await searchParams).search || "";

  const sort =
    (await searchParams).sort || "soonest";

  const page =
    Number((await searchParams).page) || 1;

  const events = await getEvents({
    category,
    search,
    sort,
    page,
  });

  return (
    <main>
      <Navbar />
      <CategoryBar />

      <EventGrid
        events={events}
      />
    </main>
  );
}