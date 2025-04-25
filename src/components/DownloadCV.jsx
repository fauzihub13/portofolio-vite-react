export default function DownloadCV(){
  const iconSize = 20;

    return (
      <button className="border border-neutral-100 rounded-lg p-3 gap-2 flex justify-center">
        <img
          src="public/icons/document.png"
          loading="lazy"
          alt="Profile"
          height={iconSize}
          width={iconSize}
        />
        <p className="text-sm font-medium text-justify">Curriculum Vitae</p>
      </button>
    );
}