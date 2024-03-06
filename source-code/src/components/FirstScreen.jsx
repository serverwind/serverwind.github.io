import js from "../../public/assets/js.svg";
import css from "../../public/assets/css.svg";
import html from "../../public/assets/html.svg";
import reactIcon from "../../public/assets/react.svg";
import wp from "../../public/assets/wp.svg";
import tailwindIcon from "../../public/assets/tailwind.svg";
import Social from "./Social";

const Hello = () => {
  return (
    <>
      <h1 className="text-5xl sm:text-6xl font-bold">Front End Developer</h1>
      <p className="text-lg font-thin py-8">Hi, I&apos;m Alexandr Petrov. A passionate Front-end Developer based in Moldova.</p>
    </>
  );
};

const TechStack = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">Techs</span>
      <Tech img={html} alt="HTML" />
      <Tech img={css} alt="CSS" />
      <Tech img={js} alt="JS" />
      <Tech img={reactIcon} alt="React" />
      <Tech img={wp} alt="CMS Wordpress" />
      <Tech img={tailwindIcon} alt="Tailwind" />
    </div>
  );
};

const Tech = ({ img, alt }) => {
  return (
    <>
      <img className="w-8" src={img} alt={alt} />
    </>
  );
};

const FirstScreen = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
      <div className="max-w-5xl">
        <Hello />
        <div className="sm:flex sm:items-center grid gap-4 justify-center">
          <Social />
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default FirstScreen;
