import { ContactUs, Map } from "../../components";
import "./contact.scss";

function contact() {
  return (
    <div>
      <h2>Contacts</h2>
      <div className="contact">
        <Map />
        <ContactUs />
      </div>
    </div>
  );
}

export default contact;
