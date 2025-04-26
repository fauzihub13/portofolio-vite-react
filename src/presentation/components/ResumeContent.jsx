import ResumeCard from "./ResumeCard";

export default function ResumeContent() {
  const educations = [
    {
      logo: "IPB.png",
      company: "IPB University",
      role: "Software Engineering Technology ",
      period: "2022 - present",
      details: [],
    },
  ];

  const experiences = [
    {
      logo: "experiences/kbi.png",
      company: "PT Kita Bantu Indonesia",
      role: "Mobile Developer Internship",
      period: "Feb 2025 - present",
      details: [],
    },
    {
      logo: "experiences/hugo_studio.png",
      company: "Hugo Studio",
      role: "Mobile Developer Internship",
      period: "Feb 2025 - present",
      details: [
        "Developed Lumbung Data Mobile application using Flutter to digitalize village letter services",
        "Implemented GetX for state management to ensure responsive user flows",
        "Integrated REST API to streamline the process of letter submission and tracking",
        "Designed a status-tracking feature to enhance service transparency",
        "Completed the project from design slicing to final build within 1.5 months and delivered on time",
      ],
    },
    {
      logo: "experiences/elite_home.png",
      company: "Elite Home Creations",
      role: "Web Developer Internship",
      period: "July 2024 - Sep 2024",
      details: [
        "Build a hotel company profile website with Laravel, featuring dynamic room pages, details of each room, and article pages",
        "Build an admin dashboard with Laravel Filament for flexible and dynamic content management",
        "Create APIs to display room and article data to support effective data integration",
        "Implemented Laravel with MVC approach to create a modular and user-friendly system",
      ],
    },
    {
      logo: "experiences/moku.png",
      company: "PT Moku Ferment House",
      role: "Web Developer Internship",
      period: "Mar 2024 - Jun 2024",
      details: [
        "Design intuitive UI/UX with a focus on ease of navigation and user experience",
        "Developed custom elements in WordPress using Elementor, and added HTML, CSS, and JavaScript code for custom pages",
        "Created a kombucha calculator for automatic calculation of ingredients based on milliliter amount input",
        "Built a responsive website with call-to-actions designed to drive user conversions",
      ],
    },
  ];

  return (
    <div className="border border-neutral-100 rounded-2xl lg:w-3/4 p-4">
      <h1 className="text-2xl font-semibold mb-2">EDUCATION 🎓</h1>
      {educations.map((education, index) => (
        <ResumeCard experience={education} index={index} key={index} />
      ))}

      {/* <div className="h-10"></div> */}

      <div className="h-10"></div>
      <h1 className="text-2xl font-semibold mb-2">EXPERIENCE 💻</h1>

      <div className="grid grid-cols-1 gap-4">
        {experiences.map((experience, index) => (
          <ResumeCard experience={experience} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
