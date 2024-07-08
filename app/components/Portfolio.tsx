import Reveal from "./animation/Reveal";
import CustomCard from "./ui/CustomCard";

function Portfolio() {
  const card = [
    {
      // image: "/mef.webp",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      skills: [
        { icon: "logos/angular.svg", tooltip: "Angular" },
        { icon: "logos/bootstrap.svg", tooltip: "Bootstrap" },
        { icon: "logos/angular-material.svg", tooltip: "Angular Material" },
      ],
    },
    {
      // image: "/moc.webp",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      icon: "12 Tracks",
      skills: [
        { icon: "logos/angular.svg", tooltip: "Angular" },
        { icon: "logos/bootstrap.svg", tooltip: "Bootstrap" },
        { icon: "logos/angular-material.svg", tooltip: "Angular Material" },
        { icon: "logos/rxjs.svg", tooltip: "RxJs" },
      ],
    },
    {
      // image: "/portal.webp",
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
    {
      // image: "/portfolio.webp",
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      icon: "12 Tracks",
      skills: [
        { icon: "logos/react.svg", tooltip: "React" },
        { icon: "/logos/nextjs.svg", tooltip: "NextJs" },
        { icon: "logos/tailwind.svg", tooltip: "Tailwind" },
        { icon: "/logos/next-ui.png", tooltip: "Next UI" },
        { icon: "logos/framer-motion.svg", tooltip: "Framer Motion" },
      ],
    },
  ];
  return (
    <div id="Portfolio">
      <div className="grid place-content-center  mb-8">
        <Reveal>
          <h2 className="text-center text-accent mb-8">PORTFOLIO</h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {card.map((item, index) => (
          <CustomCard
            key={`${item.title}-${index}`}
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
