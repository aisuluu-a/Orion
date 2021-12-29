import { ServicesMain, ServiceItem } from "../../../components";
import { servicesItem } from "../../../dataBase";
import { appServicesItem } from "../../../dataBase";
import "./serviceOutsoursing.scss";

function ServiceOutsoursing() {
  return (
    <>
      <div>
        <ServicesMain
          serviceTitle={servicesItem[3].title}
          serviceSubTitle={servicesItem[3].subTitle}
          serviceText={servicesItem[3].text}
          serviceImgSrc={servicesItem[3].imgSrc}
        />
      </div>
      <div className="automatisation">
        <h2>Что такое IT-аутсорсинг?</h2>
        <p>
          IT-аутсорсинг - это прежде всего возможность для клиента
          сконцентрировать внимание на основной деятельности, передав
          IT-обслуживание профильной компании. Предприятия малого и среднего
          бизнеса предпочитают обычно комплексный IT-аутсорсинг. В этом случае
          обслуживание IT-инфраструктуры полностью передается провайдеру
          сервисных услуг.
        </p>
        <p>
          У нас много специалистов разных компетенций и мы готовы решать любые
          ИТ-задачи наших клиентов! Мы также можем не заменять, а дополнять
          имеющихся в штате ИТ-специалистов, по отсутствующим у них
          компетенциям. Например, мы можем выполнять сопровождение серверов,
          оргтехники, IP-телефонии, а специалист в штате - сопровождает рабочие
          места и программное обеспечение.
        </p>

        <div className="about-service">
          <div className="service-description">
            <h2>Тренды в дизайне мобильных приложений от Orion</h2>
            <iframe
              width="1285"
              height="678"
              src="https://www.youtube.com/embed/O182DruCmu8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceOutsoursing;
