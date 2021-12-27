import React, { useState, useEffect } from "react";
import "./servicesMain.scss";
import ServicesMainImg from "../../images/ServicesMain1.jpeg";

function ServicesMain() {
  return (
    <div className="services-main">
      <div className="services-main-left">
        <h1 className="font-weight-bold">Услуги</h1>
        <h3>
          Разработка и внедрение программных решений для бизнеса. Поддержка IT
          инфраструктуры.
        </h3>
        <p>
          Поддержка и развитие IT-инфраструктуры жизненно необходимы для любого
          бизнеса. Пользуясь услугами привлеченных IT-специалистов, компании с
          большей вероятностью достигнут технологического превосходства и смогут
          закрепиться в мире высоких технологий. Softvoya - команда опытных
          инженеров, дизайнеров и менеджеров. Компания предлагает услуги по
          разработке программного обеспечения на заказ, созданию веб приложений,
          мобильных приложений для платформ Android и iOS, автоматизации
          бизнес-процессов и IT-консалтингу.
        </p>
      </div>
      <div className="services-main-right">
        <img src={ServicesMainImg} alt="Services" />
      </div>
    </div>
  );
}

export default ServicesMain;
