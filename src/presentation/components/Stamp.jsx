export default function Stamp() {
  const iconSize = 20;

    return (
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
    );
}