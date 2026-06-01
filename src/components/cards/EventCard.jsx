export default function EventCard({ event }) {
  return (
    <div>
      
      {/* Top Card */}
      <div
        className={`h-[270px] rounded-3xl bg-gradient-to-r ${event.gradient} p-7 flex justify-between`}
      >
        
        {/* Category */}
        <div>
          <span className="bg-black text-white text-xs px-4 py-2 rounded-full uppercase tracking-wider">
            {event.category}
          </span>
        </div>

        {/* Circle */}
        <div className="w-12 h-12 rounded-full bg-white"></div>
      </div>

      {/* Content */}
      <div className="mt-6">
        
        {/* Date */}
        <p className="text-sm font-semibold tracking-widest uppercase">
          {event.date}
        </p>

        {/* Title */}
        <h2 className="text-[20px] leading-[22px] font-bold mt-3">
          {event.title}
        </h2>

        {/* Location */}
        <p className="text-xl mt-4 text-gray-700">
          {event.location}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-6">
          
          <p className="text-2xl font-bold">
            from {event.price}
          </p>

          <p className="text-lg text-gray-700">
            {event.going}
          </p>
        </div>
      </div>
    </div>
  );
}