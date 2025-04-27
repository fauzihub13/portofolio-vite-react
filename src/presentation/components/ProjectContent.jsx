import ProjectCard from "./ProjectCard";

export default function ProjectContent() {
  const projects = [
    {
      thumbnail: "DermaScan.png",
      category: "Mobile Development",
      title: "DermaScan",
      slug: "dermascan",
      description:
        "DermaScan is a sophisticated mobile application built with Flutter, adhering to Clean Architecture, the MVVM pattern, and BLoC with Freezed for robust and maintainable code. At its core, DermaScan integrates a Convolutional Neural Network (CNN) model, implemented using TFLite Flutter, to provide accurate skin disease classification based on user-uploaded images.\n The application communicates with a backend infrastructure via REST APIs using the Dio library to fetch detailed information about identified skin conditions. To ensure user privacy, scan results are securely stored locally using Flutter Secure Storage. Key features include the ability to upload images via the device camera or gallery, perform rapid disease classification, and prioritize the presentation of results. The entire end-to-end development process, from initial model development to full application integration, was completed efficiently within a period of 1.5 months.",
      icons: [
        {
          path: "flutter.svg",
          label: "Flutter",
        },
        {
          path: "bloc.svg",
          label: "BLoC",
        },
        {
          path: "python.svg",
          label: "Python",
        },
        {
          path: "tensorflow.svg",
          label: "Tensorflow",
        },
        {
          path: "laravel.svg",
          label: "Laravel",
        },
      ],
    },

    {
      thumbnail: "LumbungData.png",
      category: "Mobile Development",
      title: "Lumbung Data",
      slug: "lumbung-data",
      description:
        "Lumbung Data is an Android mobile application meticulously developed using Flutter to streamline the process of digital letter submissions for village devices and residents. The application offers a user-friendly interface for creating and submitting various types of official letters, such as statements and requests, digitally. A key feature is the real-time status tracking, allowing users to monitor the progress of their submissions through different stages, including processing, completion, or rejection.\n Employing the GetX state management library, Lumbung Data ensures efficient and responsive application flow, providing a seamless user experience. The application seamlessly integrates with a REST API to handle all data interactions between the mobile app and the server infrastructure. This end-to-end project, encompassing everything from design implementation to the final build, was successfully completed within a focused timeframe of 1.5 months, demonstrating rapid and effective development capabilities.",
      icons: [
        {
          path: "flutter.svg",
          label: "Flutter",
        },
        {
          path: "getx.svg",
          label: "GetX",
        },
      ],
    },

    {
      thumbnail: "EmployMe.png",
      category: "Mobile Development",
      title: "EmployMe",
      slug: "employme",
      description:
        "EmployMe is a robust job portal application developed using Flutter, following the Model-View-ViewModel (MVVM) architectural pattern. The application leverages BLoC for efficient state management, ensuring a clean and well-structured flow of data throughout the application. Integration with REST APIs, utilizing the http package, facilitates secure user authentication and the retrieval of comprehensive job listings.\n User login data is securely managed through Flutter Secure Storage, prioritizing user privacy and data protection. The entire user interface was meticulously sliced from Figma designs, and core backend endpoint integrations were completed within a focused six-day timeframe. Significant attention was paid to optimizing performance and code structure to ensure the application's scalability and maintainability for future enhancements.",
      icons: [
        {
          path: "flutter.svg",
          label: "Flutter",
        },
        {
          path: "bloc.svg",
          label: "BLoC",
        },

        {
          path: "laravel.svg",
          label: "Laravel",
        },
      ],
    },

    {
      thumbnail: "Sunify.png",
      category: "Mobile Development",
      title: "Sunify",
      slug: "sunify",
      description:
        "Sunify is a user-centric mobile application designed to simplify the adoption of solar energy solutions. By integrating the OpenWeather API and the user's GPS location, Sunify provides accurate, real-time weather predictions, crucial for assessing solar energy potential. The application also incorporates Flutter Map with OpenStreetMap to display the locations of nearby solar panel vendors, making it easy for users to find local resources.\nA key feature of Sunify is its integrated cost estimation calculator, which allows users to determine the potential installation costs of solar panels based on their individual home energy consumption. The application employs BLoC state management to ensure a smooth and responsive user experience and utilizes FCM Firebase for delivering timely and relevant notifications. Rigorous unit testing was conducted throughout the development process to guarantee the reliability and intended functionality of all features.",
      icons: [
        {
          path: "flutter.svg",
          label: "Flutter",
        },
        {
          path: "bloc.svg",
          label: "BLoC",
        },
        {
          path: "firebase.svg",
          label: "Firebase",
        },
        {
          path: "osm.svg",
          label: "OpenStreetMap",
        },
        {
          path: "laravel.svg",
          label: "Laravel",
        },
      ],
    },

    {
      thumbnail: "OneHomeFarm.png",
      category: "Mobile Development",
      title: "One Home Farm",
      slug: "one-home-farm",
      description:
        "One Home Farm is a comprehensive Android mobile application that blends modern agricultural practices with advanced technology to support and enhance farmer productivity. This application offers a suite of powerful features, including AI-powered consultations, precise calculations for gardening needs, efficient plant record-keeping, a community forum for farmers to connect and share knowledge, and an e-learning platform enriched with educational videos.\n Developed using Java for the Android platform, One Home Farm includes functionalities for simulating agricultural needs and assessing agricultural quality standards. The intuitive interface allows for seamless management of farm records and activities. Furthermore, the integration of AI-based consultations aims to boost efficiency and promote awareness of sustainable farming methods, making One Home Farm a valuable tool for both novice and experienced farmers.",
      icons: [
        {
          path: "android_studio.svg",
          label: "Android Studio",
        },
        {
          path: "java.svg",
          label: "Java",
        },
        {
          path: "laravel.svg",
          label: "Laravel",
        },
        {
          path: "mongodb.svg",
          label: "MongoDB",
        },
        {
          path: "openai.svg",
          label: "OpenAI",
        },
      ],
    },

    {
      thumbnail: "Harvest.png",
      category: "Mobile Development",
      title: "Harvest",
      slug: "harvest",
      description:
        "Harvest is an innovative Android mobile application developed to engage and educate children about the world of fruits and vegetables through interactive and immersive experiences. Utilizing cutting-edge technologies such as Augmented Reality (AR) and 3D objects created with Blender, Harvest transforms learning into an exciting adventure. This approach fosters a deeper understanding and appreciation for agriculture in a digitally native generation.\n The application features interactive 3D visualizations of various fruits and vegetables, allowing children to explore their characteristics in detail. By implementing Augmented Reality, Harvest overlays these digital objects onto the real world, creating engaging and memorable learning scenarios directly within the user's environment. Developed using the Unity game engine for the Android platform, Harvest makes agricultural education both fun and accessible.",
      icons: [
        {
          path: "unity.svg",
          label: "Unity",
        },
        {
          path: "blender.svg",
          label: "Blender",
        },
      ],
    },

    {
      thumbnail: "SimPet.png",
      category: "Mobile Development",
      title: "SimPet",
      slug: "simpet",
      description:
        "SimPet is an advanced Android mobile application designed to empower livestock farmers with intelligent tools for efficient farm management. Leveraging the power of Artificial Intelligence, the application offers smart consultations, providing tailored recommendations for livestock needs. Farmers can also benefit from detailed cost calculations for various resources and an integrated e-commerce system that streamlines the procurement of essential farming supplies and livestock\n. The application's core features include a simulation module for predicting livestock requirements and resource allocation, a comprehensive e-commerce platform for purchasing tools and livestock, and AI-driven consulting services aimed at optimizing farm management practices and increasing overall production yields. Built natively using Java for the Android platform, SimPet aims to modernize livestock farming by providing data-driven insights and convenient solutions directly to farmers' fingertips",
      icons: [
        {
          path: "android_studio.svg",
          label: "Android Studio",
        },
        {
          path: "java.svg",
          label: "Java",
        },
        {
          path: "mongodb.svg",
          label: "MongoDB",
        },
        {
          path: "openai.svg",
          label: "OpenAI",
        },
      ],
    },
  ];

  return (
    <div className="border border-neutral-100 rounded-2xl p-4">
      <h1 className="text-2xl font-semibold mb-2">PROJECT 🗂️</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
