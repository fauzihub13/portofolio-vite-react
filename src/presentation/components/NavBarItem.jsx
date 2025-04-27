import { Link, useLocation } from "react-router-dom";

export default function NavBarItem({ icon, url = "" }) {
  const location = useLocation();
  const isActive = location.pathname === url;
  const baseClasses =
    "border border-neutral-100 rounded-lg p-3 w-full hover:bg-blue-100 cursor-pointer ";
  const activeClasses = "bg-blue-100 border-blue-500"; 

  const combinedClasses = isActive
    ? `${baseClasses}${activeClasses}`
    : baseClasses;

  return (
    <Link to={url} className={combinedClasses}>
      <img
        src={`icons/navbar/${icon}`}
        className="mx-auto fill-blue-500"
        loading="lazy"
        alt={url}
        height="34"
        width="34"
      />
    </Link>
  );
}
