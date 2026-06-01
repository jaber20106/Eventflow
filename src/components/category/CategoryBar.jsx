"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    slug: "",
    color: "",
  },
  {
    name: "Music",
    slug: "music",
    color: "bg-red-400",
  },
  {
    name: "Tech",
    slug: "tech",
    color: "bg-violet-500",
  },
  {
    name: "Sports",
    slug: "sports",
    color: "bg-cyan-500",
  },
  {
    name: "Food",
    slug: "food",
    color: "bg-lime-500",
  },
  {
    name: "Nightlife",
    slug: "nightlife",
    color: "bg-pink-500",
  },
  {
    name: "Workshops",
    slug: "workshops",
    color: "bg-blue-600",
  },
  {
    name: "Arts",
    slug: "arts",
    color: "bg-red-500",
  },
  {
    name: "Community",
    slug: "community",
    color: "bg-lime-500",
  },
  {
    name: "Business",
    slug: "business",
    color: "bg-violet-500",
  },
];

export default function CategoryBar() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategory = (slug) => {

    const params = new URLSearchParams(searchParams);

    if (!slug) {
      params.delete("category");
    } else {
      params.set("category", slug);
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="px-14 py-6 border-b border-gray-200">

      <div className="flex items-center gap-10 text-[14px] font-semibold">

        {categories.map((category) => (

          <button
            key={category.name}
            onClick={() => handleCategory(category.slug)}
            className="flex items-center gap-2"
          >

            {/* Dot */}
            {category.color && (
              <div
                className={`w-3 h-3 rounded-full ${category.color}`}
              ></div>
            )}

            {/* Text */}
            <span>{category.name}</span>

          </button>
        ))}

      </div>
    </div>
  );
}