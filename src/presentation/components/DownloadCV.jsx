export default function DownloadCV() {
  const cvUrl = "/cv/CV_Fauzi Adi Saputra_Mobile_EN_270425.pdf";

  function handleClick() {
    window.open(cvUrl, "_blank", "noopener,noreferrer");
  }
  return (
    <button
      className="btn border-base-100 bg-base-200 font-medium"
      onClick={handleClick}
    >
      Curriculum Vitae
    </button>
  );
}
