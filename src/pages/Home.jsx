import React from "react";
import CategoryList from "../components/CategoryList";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <>
      <main className="h-2/4 max-h-[700px] flex items-center flex-row-reverse overflow-x-hidden overflow-y-hidden justify-between p-16 relative">
        <img
          src="/assets/images/BannerBurguer.png"
          className="h-[500px] -rotate-12 translate-x-32 -z-10 drop-shadow-lg"
        />

        <img
          src="/assets/images/MenphisYellow.png"
          className="absolute -z-30 w-96 top-14 right-2 translate-x-32"
        />
        <img
          src="/assets/images/MenphisYellow.png"
          className="absolute -z-30 w-96 bottom-10 right-40"
        />
        <img
          src="/assets/images/abstractShape.webp"
          className="absolute -z-20 w-[800px] bottom-14 right-0 translate-x-56 -translate-y-12  -rotate-96 "
        />

        <div className="flex flex-col gap-6 absolute m-16">
          <h2 className="text-6xl font-bold w-3/6">
            Experimente o <br />
            <span className="before:block before:translate-y-12 h-2 before:absolute before:-inset-1  before:bg-primary relative inline-block">
              <span className="relative">Melhor Artesanal </span>
            </span>{" "}
            do Rio
          </h2>
          <p className="w-3/6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam saepe
            repellat alias eligendi odit nulla, quidem ad consequatur
            reprehenderit facilis optio aperiam aliquid cum deleniti
            voluptatibus expedita porro provident. Commodi!
          </p>
          <div className="flex gap-6">
            <button className="btn rounded-none btn-active btn-primary">
              Ver Cardápio
            </button>
            <button className="btn rounded-none btn-outline btn-primary">
              Primary
            </button>
          </div>
        </div>
      </main>
      <section className="bg-base-300 h-fit flex flex-col items-center pb-16">
        <CategoryList />
        <TopProducts />
      </section>
      <section className="h-1/2 bg-base-100">
        Hello
      </section>
    </>
  );
};

export default Home;
