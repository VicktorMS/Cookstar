import React from "react";
import CategoryList from "../components/CategoryList";
import TopProducts from "../components/TopProducts";
import CheckIcon from "../icons/CheckIcon";
import StarIcon from "../icons/StarIcon";
import DoubleChevronIcon from "../icons/DoubleChevronIcon";

const Home = () => {
  return (
    <>
      <main className="h-1/3 max-h-[700px] flex items-center flex-row-reverse overflow-x-hidden overflow-y-hidden justify-between p-16 relative">
        <img
          src="/assets/images/BannerBurguer.png"
          className="h-[500px] -rotate-12 translate-x-32 absolute top-12 -z-10 drop-shadow-lg"
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
          <h2 className="text-6xl font-bold w-3/6 drop-shadow-sm">
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
              Nossa Localização
            </button>
          </div>
        </div>
      </main>

      <section className="bg-base-100 h-fit flex flex-col justify-center items-center absolute relative -top-14">
        <p className="pl-16 w-full text-2xl font-semibold flex items-center gap-1">
          Os Mais Pedidos
          <span className="text-primary drop-shadow-sm">
            <StarIcon />
          </span>
        </p>
        <TopProducts />
      </section>

      {/* <section className="bg-base-200 h-1/4 flex items-center">
        <img
          src="https://cdn.imgbin.com/11/14/21/imgbin-hamburger-slider-steers-french-fries-pizza-pizza-WnZ71M3Vy5pq9xCifQtejWmAs.jpg"
          className="absolute relative left-0 drop-shadow-lg h-2/5 scale-125 z-30"
        />
        <div>
          <p>Porque somos o melhor do Rio</p>
        </div>
      </section> */}

      <section className="bg-primary w-full h-1/5 flex gap-8 mb-8">
        <img
          src="https://i.pinimg.com/originals/6c/ee/58/6cee589c2f553320ee93e5afced09766.png"
          className="absolute relative left-0 drop-shadow-lg -translate-x-28 h-full scale-125 z-30"
        />
        <div className="text-primary-content w-full -translate-x-24 flex flex-col gap-2 justify-center">
          <p className="text-6xl font-bold drop-shadow-lg">
            Cadastre-se para promoções imperdíveis!
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad expedita
            odio eius, animi autem, dicta labore aliquid perspiciatis nesciunt
            maiores, laborum ullam numquam optio deleniti{" "}
          </p>
          <div className="mt-4 w-full flex">
          <input
            type="text"
            placeholder="Insira seu Email"
            className="input input-bordered rounded-lg text-lg w-full input-md max-w-xs rounded-e-none"
          />
          <button className="btn btn-neutral text-base-100 btn-md rounded-s-none">
            Enviar
          </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

{
  /* <section className="h-1/5 bg-base-100 flex items-center gap-8 mb-8">
        <img
          src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/11/23134922/Geleia-Rodizio-Divulgacao-Credito-da-foto-Victor-Rocha-5.jpeg"
          alt="Rodizio de MiniHamburgueres"
          className="w-[45%] h-full object-cover  drop-shadow-lg rounded-sm"
        />
        <div className="pr-16">
          <h3 className="text-5xl font-bold">Rodizio de Artesanal</h3>
          <p className="text-lg mb-4">
            Rodizio de MiniBurguers, monte você mesmo seus sabores favoritos.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dolorem ipsa nisi distinctio temporibus aspernatur magni excepturi
            sunt enim eum ad ratione ipsam optio, atque fuga, perferendis error
            sapiente sit.
          </p>
          <div className="flex mt-3 gap-4 w-[90%]">
            <div className="flex items-center gap-1 text-sm text-secondary">
              <CheckIcon />
              <span className="text-slate-600">Todos os dias</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-secondary">
              <CheckIcon />
              <span className="text-slate-600">
                Refil de batata frita, anel de cebola, refri ou chopp
              </span>
            </div>
          </div>
          <button className="btn mt-6 btn-outline rounded-none btn-primary">
            Saber Mais
          </button>
        </div>
      </section>

      <section className="h-1/5 bg-base-100 flex flex-row-reverse items-center gap-8">
        <img
          src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/11/23134922/Geleia-Rodizio-Divulgacao-Credito-da-foto-Victor-Rocha-5.jpeg"
          alt="Rodizio de MiniHamburgueres"
          className="w-[45%] h-full object-cover  drop-shadow-lg rounded-sm"
        />
        <div className="pl-16">
          <h3 className="text-5xl font-bold">Rodizio de Artesanal</h3>
          <p className="text-lg mb-4">
            Rodizio de MiniBurguers, monte você mesmo seus sabores favoritos.{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dolorem ipsa nisi distinctio temporibus aspernatur magni excepturi
            sunt enim eum ad ratione ipsam optio, atque fuga, perferendis error
            sapiente sit.
          </p>
          <div className="flex mt-3 gap-4 w-[90%]">
            <div className="flex items-center gap-1 text-sm text-secondary">
              <CheckIcon />
              <span className="text-slate-600">Todos os dias</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-secondary">
              <CheckIcon />
              <span className="text-slate-600">
                Refil de batata frita, anel de cebola, refri ou chopp
              </span>
            </div>
          </div>
          <button className="btn mt-6 btn-outline rounded-none btn-primary">
            Saber Mais
          </button>
        </div>
      </section> */
}
