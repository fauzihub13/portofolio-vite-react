import SkillCard from "./SkillCard";

export default function HomeContent() {
  const skills = [
    {
      title: "Mobile Development",
      tech: [
        {
          icon: "flutter.svg",
          label: "Flutter",
        },
        {
          icon: "dart.svg",
          label: "Dart",
        },
        {
          icon: "java.svg",
          label: "Java",
        },
      ],
    },
    {
      title: "Front End",
      tech: [
        {
          icon: "html.svg",
          label: "Html",
        },
        {
          icon: "css.svg",
          label: "CSS",
        },
        {
          icon: "js.svg",
          label: "Javascript",
        },
        {
          icon: "tailwind.svg",
          label: "Tailwind",
        },
        {
          icon: "bootstrap.svg",
          label: "Bootstrap",
        },
        {
          icon: "react.svg",
          label: "React",
        },
      ],
    },
    {
      title: "Back End",
      tech: [
        {
          icon: "php.svg",
          label: "PHP",
        },
        {
          icon: "laravel.svg",
          label: "Laravel",
        },
        {
          icon: "codeigniter.svg",
          label: "Codeigniter",
        },
      ],
    },
    {
      title: "Database",
      tech: [
        {
          icon: "mysql.svg",
          label: "MySql",
        },
        {
          icon: "firebase.svg",
          label: "Firebase",
        },
        {
          icon: "mongodb.svg",
          label: "MongoDB",
        },
      ],
    },
  ];

  return (
    <div className="border border-neutral-100 rounded-2xl lg:w-3/4 p-4">
      <h1 className="text-2xl font-semibold mb-2">
        Hi, I am Fauzi Adi Saputra 🙌
      </h1>
      <p className="text-justify text-base text-zinc-400">
        Final year Software Engineering student at IPB University, focusing on
        mobile application development with Flutter. I built an application with
        API integration, Firebase, geolocation, OpenStreetMap, and TFLite
        machine learning. I implemented MVVM and Clean Architecture using BLoC
        and GetX for state management. I have completed complex projects with
        tight deadlines and gained recognition in mobile app competitions and
        startups.
      </p>

      <div className="h-10"></div>
      <h1 className="text-2xl font-semibold mb-2">Skills</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.title} techList={skill.tech} />
        ))}
      </div>
    </div>
  );
}
