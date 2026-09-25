import { use } from "react";
import type { TTech } from "../types";
import TechCard from "./TechCard";

type TechListProps = {
  techPromise: Promise<TTech[]>;
  onAddToStack: (tech: TTech) => void;
};

const Technologies = ({
  techPromise,
  onAddToStack,
}: TechListProps) => {
  const technologies = use(techPromise);

  console.log(technologies);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
};

export default Technologies;