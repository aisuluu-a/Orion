import "./services.scss";
import ServiceCard from "./Card";
import { servicesData } from "../../data";

function Services() {
  return (
    <div className="services">
      <h1>Company Services</h1>
      {servicesData.map((entry, index) => (
        <ServiceCard {...entry} key={index} />
      ))}
    </div>
  );
}

export default Services;
