import events from "@/data/events";

export async function getEvents({
  category = "",
  search = "",
  sort = "soonest",
  page = 1,
}) {

  let result = [...events];

  // Category Filter
  if (category) {
    result = result.filter(
      (event) => event.slug === category
    );
  }

  // Search Filter
  if (search) {
    result = result.filter(
      (event) =>
        event.title
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }

  // Sort Placeholder
  if (sort === "soonest") {
    result = result;
  }

  // Pagination Placeholder
  const limit = 9;
  const start = (page - 1) * limit;
  const end = start + limit;

  return result.slice(start, end);
}