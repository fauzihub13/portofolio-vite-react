export default function ResumeCard({ index, experience }) {
  const ipbSize = 50;

  return (
    <div
      key={index}
      tabIndex={index}
      className="collapse collapse-arrow bg-base-100 border-base-300 border rounded-2xl"
    >
      <div className="collapse-title">
        <div className="flex gap-3 items-start">
          <img
            src={`images/${experience.logo}`}
            alt={experience.company}
            height={ipbSize}
            width={ipbSize}
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-base font-normal">{experience.company}</h2>
            <p className="text-sm text-zinc-400">{experience.role}</p>
            <p className="text-sm text-zinc-400">{experience.period}</p>
          </div>
        </div>
      </div>
      <div className="collapse-content text-sm">
        <div className="flex gap-3 items-start">
          <div className="w-16"></div>
          <div className="flex flex-col gap-1">
            <ul className="list-disc">
              {experience.details.map((detail, index) => (
                <li key={index} className="text-zinc-400">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
