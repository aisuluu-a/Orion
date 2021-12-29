import "./services.scss";
import ServiceCard from "./Card";
import { servicesData } from "../../data";

function Services() {
  return (
    <div>
      <h1>Company Services</h1>
          <div className="services">
            
            {servicesData.map((entry, index) => (
              
                <ServiceCard {...entry} key={index} />
            ))}
         </div>
    </div>

  );
}

export default Services;
