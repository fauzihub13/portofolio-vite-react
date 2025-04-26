import { Link } from "react-router-dom";
import DownloadCV from "./DownloadCV";
import ProfileButton from "./ProfileButton";
import ProfileCard from "./ProfileCard";
import Stamp from "./Stamp";

export default function Sidebar() {
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

      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/resume"}>
        <h1>Resume</h1>
      </Link>
      <Link to={"/project"}>
        <h1>Project</h1>
      </Link>

      {/* <Footer /> */}
      <Stamp />
    </div>
  );
}
