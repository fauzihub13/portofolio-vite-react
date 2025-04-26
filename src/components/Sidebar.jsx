import DownloadCV from "./DownloadCV";
import ProfileButton from "./ProfileButton";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {
  const iconSize = 20;

  return (
    <div className="flex flex-col gap-4 lg:w-1/4">
      {/* Profile Card */}
      <ProfileCard />

      {/* Contact Card */}
      <div className="flex justify-between gap-3">
       
        <ProfileButton
          imagePath="/icons/github.png"
          goTo="https://github.com/fauzihub13"
        />
        <ProfileButton
          imagePath="/icons/linkedin.png"
          goTo="https://www.linkedin.com/in/fauziaditra/"
        />
        <ProfileButton
          imagePath="/icons/gmail.png"
          goTo="mailto:fauzisaputra.it@gmail.com"
        />
      </div>

      {/* Download CV */}
      <DownloadCV />

      <button className=" rounded-lg mt-3 p-3 gap-2 flex justify-center">
        <p className="text-sm text-stone-400 text-center">Made with React Js</p>
        <img
          src="/icons/react.png"
          loading="lazy"
          alt="Profile"
          height={iconSize}
          width={iconSize}
        />
      </button>
    </div>
  );
}
