import type { TTech } from "../types";

type YourStackProps = {
  selectedTechs: TTech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-3xl font-semibold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {selectedTechs.length} Technology Selected
        </p>
      </div>

      {/* Selected Technologies */}
      <div className="space-y-2">
        {selectedTechs.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2"
          >
            {/* Technology Info */}
            <div className="flex items-center gap-3">
              
              {/* Icon */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-7 w-7 object-contain"
              />

              {/* Name & Category */}
              <div>
                <h3 className="text-xs font-medium text-gray-800">
                  {tech.name}
                </h3>

                <p className="text-[9px] text-gray-400">
                  {tech.category}
                </p>
              </div>
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => onRemove(tech.id)}
              className="text-lg font-light text-gray-400 hover:text-red-500"
              aria-label={`Remove ${tech.name}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {selectedTechs.length === 0 && (
        <p className="py-6 text-center text-xs text-gray-400">
          No technology selected
        </p>
      )}

      {/* Remove All */}
      {selectedTechs.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll} 
          className="mt-8 w-full rounded-md border border-red-200 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;