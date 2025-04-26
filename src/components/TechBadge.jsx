export default function TechBadge({ icon = "", label = "" }) {
  return (
    <button className="btn bg-white text-black rounded-full border-[#e5e5e5] font-normal ">
      <img src={`icons/tech/${icon}`} alt={label} height={20} width={20} />
      {label}
    </button>
  );
}
