import TechIcon from "./TechIcon";

export default function ProjectCard({project}) {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="h-60 lg:h-60  overflow-hidden">
        <img
          src={`images/projects/${project.thumbnail}`}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-zinc-400 mb-2 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.icons.map((icon, index) => (
            <TechIcon key={index} path={icon.path} label={icon.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
