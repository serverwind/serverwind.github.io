const Brand = () => {
  return <div className="brand basis-1/4 font-bold">SERVERWIND</div>;
};

const Link = ({ url, text, className }) => {
  return (
    <a className={className} href={url}>
      {text}
    </a>
  );
};

const Links = () => {
  return (
    <>
      <div className="hidden sm:block basis-full text-right font-thin">
        <Link url="#about" text="ABOUT" className="mx-1" />
        <Link url="#projects" text="PROJECTS" className="mx-1" />
        <Link url="#contacts" text="CONTACTS" />
      </div>
    </>
  );
};

const Navi = () => {
  return (
    <nav className="flex items-end p-4 max-w-5xl m-auto">
      <Brand />
      <Links />
    </nav>
  );
};

export default Navi;
