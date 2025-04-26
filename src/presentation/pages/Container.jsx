export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6 lg:px-12 bg-red font-poppins">
      <div className="flex flex-col lg:flex-row gap-5 mx-auto">{children}</div>
    </div>
  );
}
