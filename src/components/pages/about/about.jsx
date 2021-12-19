import "./about.scss";

function About() {
  return (
    <div className="about">
      <h1> About Us</h1>
      <div className="about-img">
        <div className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          illum?
        </div>
        <img
          src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div className="row">
        <div className="col">
          <h2>About us</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          delectus tenetur necessitatibus placeat exercitationem dolore
          blanditiis cumque id quae maiores. Suscipit at in molestias minus
          culpa assumenda ea unde libero.
        </div>
        <div className="col">
          <h2>Наши контакты </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          incidunt, eveniet provident pariatur nam, beatae tenetur similique eos
          quis quidem libero eum minima vero quod. Perspiciatis tempora
          distinctio sit pariatur?
        </div>
        <div className="col">
          <h2>Почему Мы </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo
          quis blanditiis sapiente dolor non libero atque aliquam, sunt harum
          neque ab ratione eveniet doloremque provident ea consequatur suscipit
          voluptatem!
        </div>
      </div>
    </div>
  );
}

export default About;
