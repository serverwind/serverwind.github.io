import data from "../json/db.json";

const ProjectImg = ({ project }) => {
  return <img className="rounded" src={project.img} alt={project.name} />;
};

const ProjectAbout = ({ project }) => {
  return (
    <div className="text-center p-2">
      <h3 className="text-2xl font-bold">{project.name}</h3>
      <p className="font-thin">{project.desc}</p>
      <div className="flex items-center justify-center gap-4">
        <p className="text-sm p-2 bg-gray-100">{project.tech}</p>
        <a className="text-sm bg-gray-300 p-2 hover:bg-gray-400 duration-500 delay-100" href={project.link} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

const Project = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div className="sm:grid sm:grid-cols-2 items-center justify-center rounded gap-4 mb-8 hover:bg-gray-100 duration-500 delay-100" key={project.id}>
          <ProjectImg project={project} />
          <ProjectAbout project={project} />
        </div>
      ))}
    </>
  );
};

const ProjectList = () => {
  return <Project projects={data} />;
};

const Projects = () => {
  return (
    <section className="max-w-5xl m-auto py-8 px-4">
      <h2 className="mb-8">Projects</h2>
      <ProjectList />
    </section>
  );
};

export default Projects;
