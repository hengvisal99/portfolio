import Link from "next/link";
import Reveal from "../animation/Reveal";
import CustomCard from "../ui/CustomCard";

function Portfolio() {
  const card = [
    {
      image: "/mef.png",
      title: "Mef Real Estate",
      link: "https://nbfsa.registrationservices.gov.kh",
      skills: [
        { icon: "logos/angular.svg", tooltip: "Angular" },
        { icon: "logos/bootstrap.svg", tooltip: "Bootstrap" },
        { icon: "logos/angular-material.svg", tooltip: "Angular Material" },
      ],
    },
    {
      image: "/moc.png",
      title: "Moc Ecommerce",
      link: "https://ec-user.moc.gov.kh",
      skills: [
        { icon: "logos/angular.svg", tooltip: "Angular" },
        { icon: "logos/bootstrap.svg", tooltip: "Bootstrap" },
        { icon: "logos/angular-material.svg", tooltip: "Angular Material" },
        { icon: "logos/rxjs.svg", tooltip: "RxJs" },
      ],
    },
    {
      image: "/portal.png",
      link: "https://sp-portal-stg.intechdevkh.com",
      title: "Social Protection",
      skills: [
        { icon: "logos/react.svg", tooltip: "React" },
        { icon: "/logos/nextjs.svg", tooltip: "NextJs" },
        { icon: "logos/tailwind.svg", tooltip: "Tailwind" },
        { icon: "logos/material-ui.svg", tooltip: "Material UI" },
        { icon: "logos/react-query.svg", tooltip: "React Query" },
        { icon: "/logos/react-hook-form.png", tooltip: "React Hook Form" },
        { icon: "/logos/next-auth.webp", tooltip: "Next-auth" },
        { icon: "logos/zod.svg", tooltip: "Zod" },
        { icon: "/logos/dexie.png", tooltip: "DexieJs" },
      ],
    },
    {
      image: "/portfolio.webp",
      title: "VisalFolio",
      link: "https://hengvisal.vercel.app",
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
          <Link href={item.link} target="_blank">
            <CustomCard
              key={`${item.title}-${index}`}
              image={item.image}
              title={item.title}
              skills={item.skills}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
