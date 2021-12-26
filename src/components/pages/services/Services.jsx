import "./services.scss";
import ServiceCard from "./Card";
function Services() {
  const data = [
    {
      imgSrc:
        "https://refactoring.guru/images/patterns/content/prototype/prototype.png",
      name: "Service 1",
      description: "Some description",
    },
    {
      imgSrc:
        "https://refactoring.guru/images/patterns/content/command/command-en.png",
      name: "Service 2",
      description: "Some description",
    },
    {
      imgSrc:
        "https://refactoring.guru/images/patterns/content/builder/builder-en.png",
      name: "Service 3",
      description: "Some description",
    },
    {
      imgSrc:
        "https://refactoring.guru/images/patterns/content/state/state-en.png",
      name: "Service 4",
      description: "Some description",
    },
    {
      imgSrc:
        "https://refactoring.guru/images/patterns/content/visitor/visitor.png",
      name: "Service 5",
      description: "Some description",
    },
    {
      imgSrc:
        "https://refactoring.guru/images/patterns/content/decorator/decorator.png",
      name: "Service 6",
      description: "Some description",
    },
  ];

  return (
    <div className="services" id="services">
      <h1>Company Services</h1>
      {data.map((entry, index) => (
        <ServiceCard {...entry} key={index} />
      ))}
    </div>
  );
}

export default Services;
