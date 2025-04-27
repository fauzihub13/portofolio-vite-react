export default function TechIcon({path='', label='', iconSize=32}){

    return (
      <img
        src={`icons/tech/${path}`}
        alt={label}
        height={iconSize}
        width={iconSize}
      />
    );
}