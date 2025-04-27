import TechIcon from "./TechIcon";

export default function ProjectCard({ project }) {
  const paragraphs = project.description
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");

  function handleClick() {
    document.getElementById(project.slug).showModal();
  }

  return (
    <>
      <div
        className="group card bg-base-100 shadow-sm cursor-pointer hover:bg-base-200"
        onClick={handleClick}
      >
        <figure className="h-60 lg:h-60 overflow-hidden">
          <img
            src={`images/projects/${project.thumbnail}`}
            alt="Shoes"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-zinc-400">{project.category}</h2>
          <h2 className="card-title">{project.title}</h2>
          <p className="text-zinc-400 mb-2 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.icons.map((icon, index) => (
              <TechIcon key={index} path={icon.path} label={icon.label} />
            ))}
          </div>
        </div>
      </div>

      <dialog id={project.slug} className="modal">
        <div
          className="modal-box p-6 w-11/12 max-w-2xl"
          style={{
            maxHeight: "calc(100vh - 4rem)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <figure className="w-full overflow-hidden mb-4">
            <img
              src={`images/projects/${project.thumbnail}`}
              alt="Shoes"
              className="w-full h-full object-cover rounded-2xl"
            />
          </figure>
          <h2 className="text-zinc-400 my-2">{project.category}</h2>

          <h3 className="font-bold text-lg ">{project.title}</h3>

          {paragraphs.map((paragraph, index) => (
            <p key={index} className=" py-2 text-justify text-zinc-400 mb-2">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 my-4 ">
            {project.icons.map((icon, index) => (
              <TechIcon key={index} path={icon.path} label={icon.label} />
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
