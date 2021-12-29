import {
  Main,
  Services,
  Partners,
  BeforeAfter,
  Contact,
  About,
  Articles,
} from "../../components";

function mainPage() {
  return (
    <div>
      <Main />
      <Services />
      <Partners />
      <BeforeAfter />
      {/* <News /> */}
      <Contact />
      <Articles />
      <About />
    </div>
  );
}

export default mainPage;
