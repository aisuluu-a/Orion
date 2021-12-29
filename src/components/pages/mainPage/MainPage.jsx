import {
  Main,
  Services,
  Partners,
  BeforeAfter,
  Contact,
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
      {/* <About /> */}
      <Articles />
    </div>
  );
}

export default mainPage;
