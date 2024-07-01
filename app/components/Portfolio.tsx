import CustomCard from "./ui/CustomCard";

function Portfolio() {
  const card = [
    {
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      skills: [
        { icon: "logos/angular.svg", tooltip: "Angular" },
        { icon: "logos/bootstrap.svg", tooltip: "Bootstrap" },
        { icon: "logos/angular-material.svg", tooltip: "Angular Material" },
      ],
    },
    {
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      icon: "12 Tracks",
      skills: [
        { icon: "logos/angular.svg", tooltip: "Angular" },
        { icon: "logos/bootstrap.svg", tooltip: "Bootstrap" },
        { icon: "logos/angular-material.svg", tooltip: "Angular Material" },
        { icon: "logos/ngrx.svg", tooltip: "NgRx" },
      ],
    },
    {
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      icon: "12 Tracks",
      skills: [
        { icon: "logos/react.svg", tooltip: "React" },
        { icon: "/logos/nextjs.svg", tooltip: "NextJs" },
        { icon: "logos/tailwind.svg", tooltip: "Tailwind" },
        { icon: "logos/material-ui.svg", tooltip: "Material UI" },
        { icon: "logos/react-query.svg", tooltip: "React Query" },
        { icon: "/logos/react-hook-form.png", tooltip: "React Hook Form" },
        { icon: "/logos/next-auth.png", tooltip: "Next-auth" },
        { icon: "logos/zod.svg", tooltip: "Zod" },
        { icon: "/logos/dexie.png", tooltip: "DexieJs" },
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-center text-accent mb-16">PORTFOLIO</h2>
      <div className="grid grid-cols-3 gap-6">
        {card.map((item, index) => (
          <CustomCard
            key={index}
            image={item.image}
            title={item.title}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
