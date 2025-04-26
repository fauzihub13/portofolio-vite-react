import TechBadge from "./TechBadge";

export default function SkillCard({ title = "", techList = [] }) {
  return (
    <div className="card card-border bg-base-200 w-full">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="flex flex-wrap gap-2">
          {techList.map((tech, index) => (
            <TechBadge key={index} icon={tech.icon} label={tech.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
