import Navbar from "@/components/navbar/Navbar";
import CategoryBar from "@/components/category/CategoryBar";
import EventGrid from "@/components/events/EventGrid";

export default async function Home({
  searchParams,
}) {

  const category =
    (await searchParams).category;

  return (
    <main>
      <Navbar />
      <CategoryBar />
      <EventGrid category={category} />
    </main>
  );
}