import React, { useState } from "react";
import mascote from "../../assets/cenoura.png";
import zap from "../../assets/zap.png";
import {
  ArrowRightStartOnRectangleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

const InitPage = () => {
  const [openBar, setOpenBar] = useState(false);
  const [genero, setGenero] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const almoco = [
    "Frango🍗",
    "Patinho🥩",
    "Alcatra🥩",
    "Carne Moida🥩",
    "Mandioca🥔",
    "Carne-Porco🐖",
    "Batata-Doce🍠",
    "Tilápia🐟",
    "Merluza🐟",
    "Salmão🐟",
    "Arroz🍚",
    "Feijão🍲",
    "Salada🥗",
    "Macarrão🍝",
    "Ovo🥚",
    "Inhame🍠",
    "Cuscuz🍚",
    "Batata🥔",
  ];

  const cafemanha = [
    "Tapioca + Frango🥙",
    "Crepioca + Queijo🥞",
    "Fruta🍎",
    "Iogurte🥛",
    "Café☕",
    "Pão de Queijo🧀",
    "Pão + Ovo🥖",
    "Café + Leite☕",
    "Cuscuz 🍚",
    "Pão + Queijo🍞",
    "Pão + Presunto🥓"
  ];

  const cafetarde = [
    "Whey🥛",
    "Fruta🍍",
    "Cuscuz🍚",
    "Pão + Ovo🥖",
    "Tapioca + Frango🥙",
    "Crepioca + Queijo🥞",
    "Leite🥛",
    "Rap10 + Frango🌯",
    "Ovo🥚",
    "Sanduíche Frango🥪",
    "Sanduíche de Peru🥪",
    "Suco🥤"
  ];

  const janta = [
    "Frango🍗",
    "Patinho🥩",
    "Alcatra🥩",
    "Carne Moida🥩",
    "Mandioca🥔",
    "Carne-Porco🐖",
    "Batata-Doce🍠",
    "Tilápia🐟",
    "Merluza🐟",
    "Suco🥤",
    "Arroz🍚",
    "Feijão🍲",
    "Salada🥗",
    "Macarrão🍝",
    "Ovo🥚",
    "Inhame🍠",
    "Cuscuz🍚",
    "Batata🥔"
  ];

  return (
    <div
      className={
        openBar == true
          ? "flex flex-col w-auto h-screen overflow-auto overflow-x-hidden relative"
          : "flex flex-col w-auto h-screen overflow-auto overflow-x-hidden relative"
      }
    >
      <div className="flex w-screen min-h-14 border items-center px-5">
        <button
          onClick={() => {
            setOpenBar(true);
          }}
          className="left-5 z-40"
        >
          <Bars4Icon className="w-6 h-6 text-orange-500" />
        </button>
        <div className="flex flex-row w-full items-center justify-center left-1/2 transform -translate-x-1/2 absolute">
          <div className="font-semibold text-2xl text-orange-400">
            Master Nutri
          </div>
          <div>
            <img className="w-14" src={mascote}></img>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-8 items-center justify-center bg-orange-500 shadow-sm text-white">
        Preencha suas medidas abaixo ↓
      </div>

      <div className="flex flex-col w-screen items-center justify-center">
        <div className="flex pr-16 pl-16 pt-3 pb-3 w-auto h-auto border border-gray-200 rounded-[1.2rem] mt-2 shadow-sm items-center justify-center flex-wrap space-x-32">
          <div className="flex flex-col items-center">
            🍑<p>Ver Dieta</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-5" src={zap}></img>
            <p>Suporte</p>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mt-5 mb-5 shadow-lg border items-center justify-center">
          <div className="flex w-full h-8 border border-gray-200 rounded-[1.2rem] shadow-sm bg-gray-50 mb-5">
            <div className="flex w-[9rem] h-8 border-r-2 border-gray-200 rounded-[1.2rem] bg-orange-500 text-white items-center justify-center">
              Medidas
            </div>
          </div>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Peso"
          ></input>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Altura"
          ></input>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Idade"
          ></input>
          <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Obejtivo"}>Selecione seu objetivo</option>
            <option value={"Obejtivo"}>Emagrecer</option>
            <option value={"Obejtivo"}>Ganho de Massa Muscular</option>
            <option value={"Obejtivo"}>Definição + Massa Muscular</option>
            <option value={"Obejtivo"}>Definição</option>
            <option value={"Obejtivo"}>Emagrecer + Massa Muscular</option>
          </select>
          <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Obejtivo"}>
              Calorias desejadas para a dieta 🔥{" "}
            </option>
            <option value={"Obejtivo"}>Não sei dizer</option>
            <option value={"Obejtivo"}>1200 a 1500 calorias</option>
            <option value={"Obejtivo"}>1600 a 1900 caloria</option>
            <option value={"Obejtivo"}>2000 a 2300 calorias</option>
            <option value={"Obejtivo"}>2400 a 2700 calorias</option>
          </select>
          <div className="flex w-auto items-center justify-center flex-wrap space-x-32">
            <button
              className={
                genero == "masculino"
                  ? "border border-orange-500 bg-orange-50 text-orange-500 p-4 rounded-lg font-semibold"
                  : "border border-gray-300 p-4 rounded-lg"
              }
              onClick={() => {
                setGenero("masculino");
              }}
            >
              Masculino
            </button>
            <button
              className={
                genero == "feminino"
                  ? "border border-orange-500 bg-orange-50 text-orange-500 p-4 rounded-lg font-semibold"
                  : "border border-gray-300 p-4 rounded-lg"
              }
              onClick={() => {
                setGenero("feminino");
              }}
            >
              Feminino
            </button>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Café da Manhã ☕</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {cafemanha.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Almoço 🍽️</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {almoco.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Lanche da Manhã e Tarde 🥪</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {cafetarde.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Jantar 🍽️</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {janta.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

      </div>

      {openBar == true ? (
        <div className="overflow-x-hidden h-screen w-96 bg-white border font-bold left-0 top-0 z-50 rounded-lg shadow-lg p-4 absolute">
          <button
            onClick={() => {
              setOpenBar(false);
            }}
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </button>
          <div className="flex w-full items-center justify-center scroll-mt-4">
            <img className="w-32 h-32 rounded-full border" src={mascote}></img>
          </div>
          <div className="flex text-3xl text-center items-center justify-center w-full mt-12">
            <p>Olá, Cliente 💛</p>
          </div>
          <div className="flex text-xl text-center items-center justify-center w-full mt-6 font-normal text-slate-500">
            <p>pedro_mora_neto@hotmail.com</p>
          </div>
          <div className="flex text-lg text-center items-center justify-center w-full mt-12 font-normal text-slate-500">
            <p>Ticket: 0</p>
          </div>
          <div className="w-full border-b-2 mt-20"></div>
          <div className="flex flex-col w-full items-start justify-start px-5">
            <div className="flex text-xl text-center w-full mt-16 text-gray-700 font-semibold cursor-pointer">
              <p>🥕 Perfil</p>
            </div>{" "}
            <div className="flex text-xl text-center w-full mt-6 text-gray-700 font-semibold cursor-pointer">
              <p>🧡 Indique e Ganhe</p>
            </div>{" "}
            <div className="flex text-xl text-center w-full mt-6 text-gray-700 font-semibold cursor-pointer">
              <p>🥗 Acessar Dieta</p>
            </div>{" "}
            <div className="flex text-xl text-center w-full mt-6 text-gray-700 font-semibold cursor-pointer">
              <p>💬 Fale Conosco</p>
            </div>
          </div>
          <div className="w-full border-b-2 mt-20"></div>
          <div className="flex text-base text-center w-full mt-8 mb-2 text-red-500 font-semibold px-5 cursor-pointer items-center">
            <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-red-500 mr-1" />{" "}
            Sair
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InitPage;
