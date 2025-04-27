export default function ProfileButton({ imagePath = "", goTo = "" }) {
  const iconSize = 20;

  function handleOnClick() {
    window.location.href = goTo;
  }

  return (
    <div
      className="border border-neutral-100 rounded-lg p-3 w-full cursor-pointer hover:bg-neutral-100"
      onClick={handleOnClick}
    >
      <img
        src={imagePath}
        className="mx-auto"
        loading="lazy"
        alt="Profile"
        height={iconSize}
        width={iconSize}
      />
    </div>
  );
}
