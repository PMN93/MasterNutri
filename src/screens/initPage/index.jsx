import React, { useEffect, useState } from "react";
import mascote from "../../assets/cenoura.png";
import zap from "../../assets/zap.png";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightStartOnRectangleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";

const InitPage = () => {
  const [openBar, setOpenBar] = useState(false);
  const [genero, setGenero] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [calorias, setCalorias] = useState("");
  const [nivelAtividade, setNivelAtividade] = useState("");
  const [treino, setTreino] = useState("");
  const [horariosRefeicao, setHorariosRefeicao] = useState("");
  const [chocolate, setChocolate] = useState("");
  const [alimentoCafeManha, setAlimentoCafeManha] = useState([]);
  const [alimentoAlmoco, setAlimentoAlmoco] = useState([]);
  const [alimentoLancheManhaTarde, setAlimentoLancheManhaTarde] = useState([]);
  const [alimentoJantar, setAlimentoJantar] = useState([]);

  const dados = {
    contents: [
      {
        parts: [
          {
            text: `Olá, você é uma nutricionista experiente em dietas esportivas, e eu preciso de uma dieta balanceada baseando-se nas informações abaixo, sou ${genero}, tenho ${idade} anos, peso ${peso} quilos, tenho alturea de ${altura} e quero ${objetivo}, minha dieta precisa ser de ${calorias}, confio em você para verificar da melhor forma, e preciso que a dieta seja dividida em 5 partes, sendo ela café da manhã, lanche da manhã, almoço, lanche da tarde e jantar, sendo 3 opções diferentes de cada refeição, por exemplo 3 opções de café da manhã, 3 de lanche da manhã, 3 de almoço, 3 de lanche da tarde e 3 de jantar, coloque na frente do nome o número da opção e quantas calorias aquela refeição terá, por exemplo café da manhã 1 - 300 cal, café da manhã 2 - 150 cal  e assim por diante. Vou mostrar alguns alimentos que tenho preferência em cada refeição para que você adapte se possível o consumo deles, claro, mantendo sempre a base calórica necessária conforme meu objetivo. No café da manhã eu gosto de ${alimentoCafeManha}, no lanche da manhã gosto de ${alimentoLancheManhaTarde}, no almoço gosto de ${alimentoAlmoco}, o lanche da tarde pode conter os mesmo ingredientes do lanche da manhã, e no jantar gosto de ${alimentoJantar}. Eu sou ${nivelAtividade}, Quero que os horário das refeições sejam ${horariosRefeicao}. Chocolate na dieta? ${chocolate}. Preciso que a resposta seja em formato de lista sem formatação html e json, sem usar \n no fim da resposta, quero apenas que use ; entre os nomes das refeições, exemplo café da manhã, almoço; e entre os alimentos use , para separar, não me manda mais nenhuma informação nem mesmo observação, mantenha como resposta o exemplo a seguir 'Café da manhã: Crepioca com 100g de frango desfiado, 1/2 xícara de frutas vermelhas, café (sem açúcar), 1 fatia de pão integral com 1 ovo cozido, 1 pote de iogurte desnatado; Lanche da manhã: 30g de whey protein, 200ml de leite desnatado, 1/2 xícara de frutas (maçã, pera), 1 ovo cozido, 200ml de suco de laranja natural; Almoço: 150g de frango grelhado, 100g de patinho grelhado, 1/2 xícara de batata doce cozida, salada variada (alface, tomate, pepino, 1 colher de sopa de azeite), 1 ovo cozido; Lanche da tarde: 30g de whey protein, 200ml de leite desnatado, 1/2 xícara de frutas (morango, banana), 1 ovo cozido, 200ml de suco de laranja natural; Jantar: Salada variada (alface, tomate, pepino, 1 colher de sopa de azeite), 200ml de suco de abacaxi, 1/2 xícara de batata doce cozida, 100g de frango grelhado, 50g de patinho grelhado, 1 quadradinho de chocolate 70% cacau (Trento)\n'`,
          },
        ],
      },
    ],
  };

  function reqIA() {
    axios
      .post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCOl12PpKregLhm7PQpMgYxrWn_ehLYDsI",
        dados
      )
      .then(async (response) => {
        console.log(
          "Resposta recebida:",
          response.data.candidates[0].content.parts[0].text
        );
        await converterDietaParaArrayDeObjetos(response.data.candidates[0].content.parts[0].text);
        setGenero("");
        setPeso("");
        setAltura("");
        setIdade("");
        setObjetivo("");
        setCalorias("");
        setNivelAtividade("");
        setTreino("");
        setHorariosRefeicao("");
        setChocolate("");
        setAlimentoCafeManha([]);
        setAlimentoAlmoco([]);
        setAlimentoLancheManhaTarde([]);
        setAlimentoJantar([]);
        ToPdf()
      })
      .catch((error) => {
        if (error.response) {
          // O servidor respondeu com um status diferente de 2xx
          console.error(
            "Erro na resposta:",
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta
          console.error("Nenhuma resposta recebida:", error.request);
        } else {
          // Algo aconteceu na configuração da requisição
          console.error("Erro ao configurar requisição:", error.message);
        }
      });
  }

  async function converterDietaParaArrayDeObjetos(dietaString) {
    const dietaArray = [];
    const refeicoes = dietaString.split(";");
    
    refeicoes.forEach((refeicao) => {
      const partes = refeicao.split(":");
      if (partes.length < 2) {
        console.error("Erro ao processar refeição:", refeicao);
        return;
      }
      const [nomeRefeicao, alimentos] = partes;
  
      dietaArray.push({
        nome: nomeRefeicao ? nomeRefeicao.trim() : "Refeição desconhecida",
        alimentos: alimentos ? alimentos.trim() : "Não especificado",
      });
    });
  
    return ToPdf(dietaArray);
  }


  const ToPdf = (array) => {
    const doc = new jsPDF();

    doc.addImage(mascote, 15, 2, 20, 20);
    doc.setFontSize(20);
    doc.text("Dieta Personalizada", 65, 15);

    // Cabeçalho da tabela
    const headers = [["Refeição", "Alimentos"]];

    // Corpo da tabela
    const data = array.map((item) => [item.nome, item.alimentos]);

    // Cria a tabela
    autoTable(doc, {
      startY: 25,
      head: headers,
      body: data,
      theme: "grid",
      tableWidth: "auto",
      halign: "center",
      valign: "middle",
    });

    doc.setFontSize(12);
    doc.text("Observações importantes:", 15, doc.previousAutoTable.finalY + 10);
    doc.setFont("Calibri", "italic");
    doc.text(
      "- Beba bastante água ao longo do dia.",
      20,
      doc.previousAutoTable.finalY + 18
    );
    doc.setFont("Calibri", "italic");
    doc.text(
      "- Consulte um nutricionista regularmente.",
      20,
      doc.previousAutoTable.finalY + 24
    );

    doc.save("dieta.pdf");
  };

  const handleItemClickCafe = (item) => {
    if (alimentoCafeManha.includes(item)) {
      setAlimentoCafeManha(alimentoCafeManha.filter((i) => i !== item));
    } else {
      setAlimentoCafeManha([...alimentoCafeManha, item]);
    }
  };

  const handleItemClickLanche = (item) => {
    if (alimentoLancheManhaTarde.includes(item)) {
      setAlimentoLancheManhaTarde(
        alimentoLancheManhaTarde.filter((i) => i !== item)
      );
    } else {
      setAlimentoLancheManhaTarde([...alimentoLancheManhaTarde, item]);
    }
  };

  const handleItemClickAlmoco = (item) => {
    if (alimentoAlmoco.includes(item)) {
      setAlimentoAlmoco(alimentoAlmoco.filter((i) => i !== item));
    } else {
      setAlimentoAlmoco([...alimentoAlmoco, item]);
    }
  };

  const handleItemClickJanta = (item) => {
    if (alimentoJantar.includes(item)) {
      setAlimentoJantar(alimentoJantar.filter((i) => i !== item));
    } else {
      setAlimentoJantar([...alimentoJantar, item]);
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
    "Pão + Presunto🥓",
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
    "Suco🥤",
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
    "Batata🥔",
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
            onChange={(e) => setPeso(e.target.value)}
            value={peso}
          ></input>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Altura"
            onChange={(e) => setAltura(e.target.value)}
            value={altura}
          ></input>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Idade"
            onChange={(e) => setIdade(e.target.value)}
            value={idade}
          ></input>
          <select
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            onChange={(e) => setObjetivo(e.target.value)}
            value={objetivo}
          >
            <option value={"Objetivo"}>Selecione seu objetivo</option>
            <option value={"Emagrecer"}>Emagrecer</option>
            <option value={"Ganhar Massa Muscular"}>
              Ganho de Massa Muscular
            </option>
            <option value={"Definir o corpo e ganahr Massa Muscular"}>
              Definição + Massa Muscular
            </option>
            <option value={"Definição"}>Definição</option>
            <option value={"Emagrecer e ganhar Massa Muscular"}>
              Emagrecer + Massa Muscular
            </option>
          </select>
          <select
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            onChange={(e) => setCalorias(e.target.value)}
            value={calorias}
          >
            <option value={"Objetivo"}>
              Calorias desejadas para a dieta 🔥{" "}
            </option>
            <option value={"Não sei dizer"}>Não sei quantas calorias</option>
            <option value={"1200 a 1500 calorias"}>1200 a 1500 calorias</option>
            <option value={"1600 a 1900 caloria"}>1600 a 1900 caloria</option>
            <option value={"2000 a 2300 calorias"}>2000 a 2300 calorias</option>
            <option value={"2400 a 2700 calorias"}>2400 a 2700 calorias</option>
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
                  alimentoCafeManha.includes(item)
                    ? "bg-orange-200 border border-orange-500"
                    : "bg-white"
                }`}
                onClick={() => handleItemClickCafe(item)}
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
                  alimentoAlmoco.includes(item)
                    ? "bg-orange-200 border border-orange-500"
                    : "bg-white"
                }`}
                onClick={() => handleItemClickAlmoco(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">
            Lanche da Manhã e Tarde 🥪
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
            {cafetarde.map((item) => (
              <div
                key={item}
                className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
                  alimentoLancheManhaTarde.includes(item)
                    ? "bg-orange-200 border border-orange-500"
                    : "bg-white"
                }`}
                onClick={() => handleItemClickLanche(item)}
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
                  alimentoJantar.includes(item)
                    ? "bg-orange-200 border border-orange-500"
                    : "bg-white"
                }`}
                onClick={() => handleItemClickJanta(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">
            Treinos e Atividades 🏋🏻‍♀️
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <select
              className="border border-gray-300 p-2 rounded-md w-full mb-4"
              onChange={(e) => setNivelAtividade(e.target.value)}
              value={nivelAtividade}
            >
              <option value={"Objetivo"}>Nível de Atividade Física </option>
              <option
                value={"Sedentário com pouca ou nenhuma atividade física"}
              >
                Sedentário (pouca ou nenhuma atividade física)
              </option>
              <option
                value={"Levemente ativo faço exercícios 1 a 3 vezes por semana"}
              >
                Levemente ativo (exercícios 1 a 3 vezes por semana)
              </option>
              <option
                value={
                  "Moderadamente ativo faço exercícios de 3 a 5 vezes por semana"
                }
              >
                Moderadamente ativo (exercícios de 3 a 5 vezes por semana)
              </option>
              <option
                value={
                  "Altamente ativo faço exercícios de 5 a 7 dias por semana"
                }
              >
                Altamente ativo (exercícios de 5 a 7 dias por semana)
              </option>
              <option
                value={
                  "Extremamente ativo faço exercícios todos dias e faço trabalho braçal"
                }
              >
                Extremamente ativo (exercícios todos dias e faz trabalho braçal)
              </option>
            </select>

            <select
              className="border border-gray-300 p-2 rounded-md w-full mb-4"
              onChange={(e) => setTreino(e.target.value)}
              value={treino}
            >
              <option value={"Objetivo"}>Deseja treino? </option>
              <option value={"Sim, um treino para fazer na academia"}>
                Sim, treino na academia
              </option>
              <option value={"Sim, treino para fazer em casa"}>
                Sim, treino em casa
              </option>
              <option value={"Não"}>Não</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">
            Adicionais na Dieta 🥗
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <select
              className="border border-gray-300 p-2 rounded-md w-full mb-4"
              onChange={(e) => setHorariosRefeicao(e.target.value)}
              value={horariosRefeicao}
            >
              <option value={"Objetivo"}>Horários de cada refeição </option>
              <option value={"Tenho meu próprio horário"}>
                Tenho meu próprio horário
              </option>
              <option value={"05:30, 08:30, 12:00, 15:00, 19:00"}>
                05:30, 08:30, 12:00, 15:00, 19:00
              </option>
              <option value={"06:00, 09:00, 12:00, 15:00, 19:00"}>
                06:00, 09:00, 12:00, 15:00, 19:00
              </option>
              <option value={"06:30, 09:30, 13:00, 16:00, 20:00"}>
                06:30, 09:30, 13:00, 16:00, 20:00
              </option>
              <option value={"07:00, 10:00, 12:30, 15:30, 19:30"}>
                07:00, 10:00, 12:30, 15:30, 19:30
              </option>
              <option value={"07:30, 10:30, 12:00, 15:00, 19:00"}>
                07:30, 10:30, 12:00, 15:00, 19:00
              </option>
              <option value={"08:00, 11:00, 13:30, 16:30, 20:30"}>
                08:00, 11:00, 13:30, 16:30, 20:30
              </option>
              <option value={"09:00, 11:00, 13:00, 16:00, 21:00"}>
                09:00, 11:00, 13:00, 16:00, 21:00
              </option>
            </select>
            <select
              className="border border-gray-300 p-2 rounded-md w-full mb-4"
              onChange={(e) => setChocolate(e.target.value)}
              value={chocolate}
            >
              <option value={"Objetivo"}>Chocolate na dieta? </option>
              <option value={"Não, obrigado"}>Não, obrigado</option>
              <option value={"Sim, um Bis"}>Sim, um Bis 🍫</option>
              <option value={"Sim, um Prestígio"}>Sim, um Prestígio 🍫</option>
              <option value={"Sim, um Trento"}>Sim, um Trento 🍫</option>
              <option value={"Sim, um Baton"}>Sim, um Baton 🍫</option>
              <option value={"Sim, um Chokito"}>Sim, um Chokito 🍫</option>
              <option value={"Sim, um Sonho de Valsa"}>
                Sim, um Sonho de Valsa 🍫
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center bg-orange-500">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex w-auto h-10 rounded-[1.2rem] bg-orange-50 items-center justify-center p-6 font-medium text-orange-900">
              Mais acessível que um café! ☕
            </div>
            <p className="mt-8 text-white text-center font-medium">
              Por menos de R$10,00, Você monta sua Dieta TOTALMENTE
              PERSONALIZADA.
            </p>
            <div className="flex w-full h-10 rounded-[1.2rem] bg-orange-50 items-center justify-center p-6 font-bold mt-8 text-orange-900 cursor-pointer">
              MONTAR MINHA DIETA
            </div>
          </div>
        </div>

        <div className="flex flex-col pb-10 pt-5 pl-5 pr-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex rounded-full bg-orange-50 items-center justify-center p-6 font-medium">
              <PencilSquareIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex items-center justify-center font-bold text-3xl text-gray-700 mt-6">
              Como Montar?
            </div>
            <p className=" text-gray-700 text-center font-medium mt-5">
              Por menos de R$10,00, Você monta sua Dieta TOTALMENTE
              PERSONALIZADA.
            </p>
          </div>
        </div>

        <div className="flex flex-col pb-10 pt-5 pl-5 pr-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex rounded-full bg-orange-50 items-center justify-center p-6 font-medium">
              <ArrowDownTrayIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex items-center justify-center font-bold text-3xl text-gray-700 mt-6">
              Como receber a Dieta?
            </div>
            <p className=" text-gray-700 text-center font-medium mt-5">
              Após o pagamento, volte ao site e aguarde até 5 minutos para que
              sua dieta seja gerada. Você poderá visualizá-la ou baixá-la em
              PDF.
            </p>
          </div>
        </div>

        <div className="flex flex-col pb-10 pt-5 pl-5 pr-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-10 shadow-lg border items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex rounded-full bg-orange-50 items-center justify-center p-6 font-medium">
              <ClockIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex items-center justify-center font-bold text-3xl text-gray-700 mt-6">
              Como funciona?
            </div>
            <p className=" text-gray-700 text-center font-medium mt-5">
              O valor é pago apenas uma vez via PIX. No cartão, é uma assinatura
              recorrente com vários benefícios, incluindo consultas semanais com
              a nutricionista. Você pode cancelar quando quiser. Sempre baixe
              sua dieta em pdf antes de gerar outra, pois será substituída.
            </p>
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
      <button
        className="cursor-pointer"
        onClick={() => {
          console.log(
            "Formulário Preenchido",
            peso,
            altura,
            idade,
            objetivo,
            calorias,
            genero,
            alimentoCafeManha.join(),
            alimentoAlmoco.join(),
            alimentoLancheManhaTarde.join(),
            alimentoJantar.join(),
            nivelAtividade,
            treino,
            horariosRefeicao,
            chocolate
          );
          reqIA();
        }}
      >
        Teste
      </button>
    </div>
  );
};

export default InitPage;
