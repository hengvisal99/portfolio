import CustomCard from "./ui/CustomCard";

function Portfolio() {
  const card = [
    {
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      icon: "12 Tracks",
    },
    {
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      icon: "12 Tracks",
    },
    {
      image: "https://nextui.org/images/hero-card-complete.jpeg",
      title: "Frontend Radio",
      icon: "12 Tracks",
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
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
