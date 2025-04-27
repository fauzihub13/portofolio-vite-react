import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between gap-4">
      <NavBarItem icon={'home.svg'} url="/"/>
      <NavBarItem icon={'resume.svg'} url="/resume"/>
      <NavBarItem icon={'code.svg'} url="/project"/>
    </div>
  );
}
