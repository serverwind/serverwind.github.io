const Header = () => {
  return <h2>About</h2>;
};

const Desc = () => {
  return (
    <>
      <p>Hello! My name is Alexandr! I am a Frontend Developer with proficiency in a HTML, CSS, and JavaScript.</p>
      <p>Over the years, I have created a large number of landing pages for websites, products and services, Web applications, templates for CMS Wordpress, optimized websites for key indicators of Google Core Web Vitals, and much more!</p>
      <p>Taked charge of projects on more than one occasion. Trained several interns from scratch, who then successfully joined the team.</p>
    </>
  );
};

const About = () => {
  return (
    <section className="max-w-5xl m-auto pt-16 pb-6 px-4">
      <Header />
      <Desc />
    </section>
  );
};

export default About;
