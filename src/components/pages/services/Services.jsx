import "./services.scss";
import ServiceCard from "./Card";
function Services() {
  const data = [
    {
      imgSrc:
        "https://quasa.io/storage/photos/%D1%84%D0%BE%D1%82%D0%BE%2013/%D0%B2%D0%BC%D0%B0%D0%BD%D0%B0%D0%B4%D0%B6%2010.jpeg",
      name: "Service 1",
      description: "Some description",
    },
    {
      imgSrc:
        "https://www.sunviewsoftware.com/hs-fs/hubfs/itsm.jpg?width=1200&name=itsm.jpg",
      name: "Service 2",
      description: "Some description",
    },
    {
      imgSrc:
        "https://premieritsolution.co.uk/wp-content/uploads/2020/01/Benefits-of-outsourced-IT-services-1024x512.png",
      name: "Service 3",
      description: "Some description",
    },
    {
      imgSrc:
        "https://botera.top/assets/images/blog/telegram-bot-internet-provider.jpg",
      name: "Service 4",
      description: "Some description",
    },
    {
      imgSrc:
        "https://www.akchabar.kg/media/news/7ed65585-6365-4d70-8501-49e3d7ac179d.jpg.850x445_q82_crop.jpg",
      name: "Service 5",
      description: "Some description",
    },
    {
      imgSrc:
        "https://st2.depositphotos.com/1258191/7220/i/600/depositphotos_72200647-stock-photo-financial-services-professional-team.jpgt",
      name: "Service 6",
      description: "Some description",
    },
  ];

  return (
    <div className="services">
      <h1>Company Services</h1>
      {data.map((entry, index) => (
        <ServiceCard {...entry} key={index} />
      ))}
    </div>
  );
}

export default Services;
