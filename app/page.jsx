import Categories from "./components/Categories";
import Deal from "./components/Deal";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import NewsLetter from "./components/NewsLetter";

function page() {
  return (
    <div className="flex flex-col mt-3 gap-5">
      <Hero />
      <Categories />
      <Featured />
      <Deal />
      <Latest />
      <NewsLetter />
    </div>
  );
}

export default page;
