import type { TTech } from "../types";

type TechCardProps = {
  tech: TTech;
  onAddToStack: (tech: TTech) => void;
};

const TechCard = ({ tech, onAddToStack }: TechCardProps) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300">

      {/* Top Section */}
      <div className="flex items-start justify-between">

        {/* Technology Icon */}
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {tech.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h2 className="mt-5 text-xl font-semibold text-gray-900">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
        {tech.description}
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100"></div>

      {/* Information Row */}
      <div className="flex items-center justify-between text-xs">

        {/* Category */}
        <span className="rounded-md bg-gray-100 px-2 py-1 text-gray-600">
          {tech.category}
        </span>

        {/* Difficulty */}
        <span className="text-gray-500">
          {tech.difficulty}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 font-medium text-gray-700">
          <span className="text-yellow-400">★</span>
          {tech.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAddToStack(tech)}
        className="mt-4 w-full rounded-lg bg-gray-950 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Add to Stack
      </button>

    </div>
  );
};

export default TechCard;