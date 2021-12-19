import "./services.scss";
import ServiceCard from "./Card";
function Services() {
  const data = [
    {
      imgSrc: "https://oteplicah.com/wp-content/uploads/2020/12/24.jpg",
      name: "Service 1",
      description: "Some description",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZGaY0ac6-iBLXuCmJ8yZyr9jTxNJt0Y03Q&usqp=CAU",
      name: "Service 2",
      description: "Some description",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-QIMdVTjLGhtOQI_CQ9eSxQ7IhmBd5AomHmyxHJ0nYPT333NJ563QxhynaRzHXKo1lY&usqp=CAU",
      name: "Service 3",
      description: "Some description",
    },
    {
      imgSrc:
        "https://internet-akademia.ru/wp-content/uploads/2019/08/pexels-photo-14351921-1024x683.jpeg",
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
