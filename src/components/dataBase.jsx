import service1 from "./images/prototype1.png";
import service2 from "./images/prototype2.png";
import service3 from "./images/prototype5.png";
import service4 from "./images/prototype6.png";
import service5 from "./images/prototype3.png";
import service6 from "./images/prototype4.png";

export const servicesData = [
  {
    imgSrc: service1,
    name: "Автоматизация бизнеса",
    description: "Some description",
  },
  {
    imgSrc: service2,
    name: "Разработка приложений",
    description: "Some description",
  },
  {
    imgSrc: service3,
    name: "IT аутсорсинг",
    description: "Some description",
  },
  {
    imgSrc: service4,
    name: "IT аутстаффинг",
    description: "Some description",
  },
  {
    imgSrc: service5,
    name: "Тестирование",
    description: "Some description",
  },
  {
    imgSrc: service6,
    name: "Поддержка",
    description: "Some description",
  },
];

export const servicesItem = [
  {
    title: "Услуги",
    subTitle:
      "Разработка и внедрение программных решений для бизнеса. Поддержка IT инфраструктуры.",
    text: "Поддержка и развитие IT-инфраструктуры жизненно необходимы для любого бизнеса. Пользуясь услугами привлеченных IT-специалистов, компании с большей вероятностью достигнут технологического превосходства. Orion - команда опытных инженеров, дизайнеров и менеджеров предлагает услуги по разработке программного обеспечения на заказ, созданию веб приложений, мобильных приложений для платформ Android и iOS, автоматизации бизнес-процессов и IT-консалтингу.",
    imgSrc: "https://service-point1.ru/info-dlya-clientov.jpg",
  },
  {
    title: "Автоматизация бизнеса",
    subTitle: "",
    text: "Orion предлагает услуги автоматизации бизнес-процессов, направленных на повышение эффективности и сокращение расходов организаций. Наша команда занимается разработкой индивидуальных решений (CRM и ERP-систем), интеграцией готовых решений для автоматизации, а также предоставляет услуги IT-консалтинга.",
    imgSrc: "https://softvoya.ru/assets/img/automation/banner.png",
  },
  {
    title: "Разработка приложений на заказ",
    subTitle: "",
    text: "Softvoya предлагает полный комплекс услуг по разработке, внедрению и дальнейшему сопровождению веб- и мобильных приложений на заказ.",
    imgSrc: "https://softvoya.ru/assets/img/mobile-apps/main.png",
  },
  {
    title: "IT аутсорсинг",
    subTitle: "",
    text: "IT аутсорсинг (IT-Outsourcing) – комплекс услуг по полной или частичной передаче определенных IT функций сторонней компании на договорной основе. В него входит: разработка, адаптация и сопровождение ПО, эксплуатация и техническое обслуживание систем. Компания Softvoya выполнила более 100 проектов по аутсорсингу IT услуг и стала надежным партнером для своих заказчиков. Наша команда предлагает полный цикл услуг по разработке ПО: анализ рынка и потребителей, создание прототипов, тестирование, внедрение и поддержку. Мы работаем с системами разного уровня сложности от комплексных CRM-систем до разработки MVP приложения. Адаптируем продукты к любым платформам, технологиям и базам данных.",
    imgSrc: "https://softvoya.ru/assets/img/it-outsourcing/banner.png",
  },
];

export const automatServicesItem = [
  {
    servicesItemImg: "https://softvoya.ru/assets/img/automation/crm.svg",
    servicesItemTitle: "Разработка CRM-систем на заказ",
    servicesItemText:
      "CRM-системы – эффективный инструмент для управления бизнесом, призванный улучшить взаимоотношения с клиентами. С помощью этих решений компании могут значительно увеличить продажи и повысить свою конкурентоспособность на рынке. Softvoya предоставляет полный комплекс услуг по созданию, внедрению и дальнейшему сопровождению CRM-систем для бизнеса. Ориентируясь на индивидуальные требования клиента, мы создаем понятные и простые в использовании решения для оптимизации следующих вопросов:",
    servicesItemLi: [
      "Увеличение продаж и прибыли благодаря более эффективной коммуникации с клиентами",
      "Оптимизация работы отдела продаж",
      "Единая база данных клиентов",
      "Электронный документооборот",
      "Контроль работы сотрудников, создание отчетов",
    ],
  },
  {
    servicesItemImg: "https://softvoya.ru/assets/img/automation/erp.svg",
    servicesItemTitle: "Разработка ERP-систем на заказ",
    servicesItemText:
      "ERP-системы призваны улучшить коммуникацию внутри компании, эффективно управлять ресурсами и дать возможность для дальнейшего масштабирования. Softvoya создает комплексные решения для объединения и оптимизации внутренних ресурсов компаний. При разработке кастомизированных ERP-систем мы уделяем особое внимание специфике бизнеса, защите данных, масштабируемости и обеспечению прозрачности бизнес-процессов. С помощью наших готовых решений клиенты смогут:",
    servicesItemLi: [
      "Оптимизировать коммуникацию внутри организации",
      "Привести в порядок отчетность и документацию",
      "Объединить все бизнес-процессы в одной программе",
      "Пользоваться единым хранилищем данных",
      "Улучшить аналитику и отчетность",
    ],
  },
  {
    servicesItemImg:
      "https://softvoya.ru/assets/img/automation/integration.svg",
    servicesItemTitle: "Интеграция готовых решений для бизнеса",
    servicesItemText:
      "Orion предлагает услуги по автоматизации бизнес-процессов на основании внедрения и настройки следующих готовых решений:",
    servicesItemLi: [
      "Upservice",
      "amoCRM",
      "Битрикс",
      "Комплексная автоматизация процессов на базе программ 1С:",
      "Бухгалтерия, ЗУП",
      "Документооборот, ЭДО, Сервис 1с-ЭДО, Командировка",
      "CRM, Битрикс-24, розница, Управление торговлей, Консолидация, Комплексная автоматизация",
      "Управление нашей фирмой, ERP управление холдингом, ERP управление предприятием 2, УПП",
    ],
  },
  {
    servicesItemImg: "https://softvoya.ru/assets/img/automation/it.svg",
    servicesItemTitle: "IT-консалтинг",
    servicesItemText:
      "На основании индивидуальных потребностей клиента, мы анализируем эффективность существующих бизнес-процессов компании, определяем стратегию развития, собираем и оцениваем требования к системе автоматизации и начинаем подготовку к ее разработке и внедрению. С помощью услуг IT-консалтинга клиенты смогут:",
    servicesItemLi: [
      "Определить дальнейшую стратегию развития и меры по оптимизации внутренних процессов",
      "Определить и повысить уровень защиты данных компании",
      "Проанализировать эффективность существующего ПО",
      "Улучшить коммуникацию внутри компании и повысить прозрачность бизнес-процессов",
      "Повысить контроль за сотрудниками и системой управления ресурсами",
    ],
  },
];

export const appServicesItem = [
  {
    servicesItemImg:
      "https://softvoya.ru/assets/img/mobile-apps/technology-stack/android.svg",
    servicesItemTitle: "Разработка веб-приложений",
    servicesItemText:
      "Веб-приложение, в отличие от сайта, направлено на взаимодействие с клиентом, обработку данных и их хранение, в то время как сайт представляет собой ресурс для предоставления информации. В качестве примеров веб-приложений можно выделить интернет-банкинг, интернет-магазины, системы бронирования (гостиниц, товаров, услуг) и т.д.",
    servicesItemText2:
      "Профессиональные UI/UX дизайнеры и разработчики Sofvoya создают уникальные и масштабируемые веб-приложения любой сложности. Комплексная разработка включает в себя следующие этапы: бизнес-анализ и определение требований проекта, дизайн, написание кода, тестирование, внедрение и дальнейшая маркетинговая и IT-поддержка.",
    servicesItemLi: [],
  },
  {
    servicesItemImg:
      "https://softvoya.ru/assets/img/mobile-apps/technology-stack/ios.svg",
    servicesItemTitle: "Разработка iOS Android приложений",
    servicesItemText:
      "Разработка мобильных приложений для платформы iOS на заказ фокусируется на последних тенденции в мире IT и потребности пользователей. Вместе с клиентом мы создадим подробный план проекта, разработаем прототип и запоминающийся дизайн, создадим простое и удобное приложение с последующим запуском в Apple store. Во время разработки наша команда оптимизирует приложение под последние обновления iPhone, iPad и Apple watch и протестирует решение на этих устройствах.",
    servicesItemText2:
      "Создавая Android-приложения для стартапов, малого и среднего бизнеса и крупных предприятий, мы анализируем как пожелания пользователей, так и требуемый функционал и маркетинговую стратегию для продвижения продукта. Обладая знаниями Java и Kotlin, наши эксперты не только создают эффективные решения для смартфонов и планшетов Android под ключ, но и оказывают услуги по разработке и интеграции отдельных функций для уже существующих приложений наших клиентов.",
    servicesItemLi: [],
  },
];