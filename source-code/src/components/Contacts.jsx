import Social from "./Social";

const Header = () => {
  return <h2>Contacts</h2>;
};

const Desc = () => {
  return <p className="text-center font-thin">Please get in touch with me through any means that suits you best:</p>;
};

const Methods = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <Social />
      <a className="text-gray-800" href="mailto:serverwind.dev@gmail.com">
        serverwind.dev@gmail.com
      </a>
    </div>
  );
};

const Contacts = () => {
  return (
    <section className="bg-neutral-100 py-16 px-4">
      <div className="max-w-5xl m-auto">
        <Header />
        <Desc />
        <Methods />
      </div>
    </section>
  );
};

export default Contacts;
