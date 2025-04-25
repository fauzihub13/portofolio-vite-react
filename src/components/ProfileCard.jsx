export default function ProfileCard() {
  const imageSize = 120;

  return (
    <div className="border border-neutral-100 rounded-lg p-4">
      <div className="flex justify-center">
        <img
          src="public/images/profile.JPG"
          loading="lazy"
          className="rounded-full"
          height={imageSize}
          width={imageSize}
          alt="Profile"
        />
      </div>

      <p className="font-medium text-lg mt-4 mb-1 text-center">
        Fauzi Adi Saputra
      </p>
      <p className="text-sm text-center mb-3">
        Certified Mobile Apps Developer | Flutter Enthusiast | Software Engineer
        Student at IPB University
      </p>
      <p className="text-xs text-stone-400 text-center">
        Kota Bogor, Jawa Barat
      </p>
    </div>
  );
}
