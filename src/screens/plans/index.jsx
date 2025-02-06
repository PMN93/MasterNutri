import React from "react";

const Plans = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center pt-5 pb-5">
      <div className="flex flex-col justify-center items-center mb-5">
        <p className="font-bold text-lg">Escolha o Plano Ideal</p>
        <p className="text-gray-500 font-medium">
          Preços que cabem no seu bolso!
        </p>
      </div>
      <div className="flex flex-wrap w-8/12 h-5/6 bg-white justify-center items-center gap-3">
        <div className="min-w-64 w-[20rem] h-auto shadow-md border border-gray-150 flex flex-col items-center pt-5">
          <div className="flex justify-center items-center pl-2 pr-2 rounded-full bg-orange-100 font-bold text-orange-500 text-[0.75rem]">
            Mais Vendido
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-2 font-bold text-md">
            Sua Dieta + Treino 🏋️
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-1 font-bold text-2xl">
            R$ 11,99
          </div>
          <div className="flex flex-col h-full w-full pl-8 mt-8 gap-1 text-sm">
            <div className="mb-2">✅ Dieta Personalizada</div>
            <div className="mb-2">✅ Treinos Personalizados</div>
            <div className="mb-2">✅ Resumo sobre sua situação</div>
            <div className="mb-2">✅ Opções para casa ou academia</div>
            <div className="mb-2">✅ Feito com base nas suas preferências</div>
            <div className="mb-2">✅ Calorias e intensidade ajustadas</div>
          </div>
          <div className="flex flex-col w-full h-20 justify-center items-center">
            <button className="flex w-10/12 p-1 items-center justify-center rounded-lg bg-orange-500 text-white">
              Comprar Agora
            </button>
          </div>
        </div>
        <div className="min-w-64 w-[20rem] h-auto shadow-md border border-gray-150 flex flex-col items-center pt-5">
          <div className="flex justify-center items-center pl-2 pr-2 rounded-full bg-orange-100 font-bold text-orange-500 text-[0.75rem]">
            Dieta focada em Emagrecimento
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-2 font-bold text-md">
            Dieta para Emagrecer 🔥
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-1 font-bold text-2xl">
            R$ 9,99
          </div>
          <div className="flex flex-col h-full w-full pl-8 mt-8 gap-1 text-sm">
            <div className="mb-2">✅ Dieta Totalmente Personalizada</div>
            <div className="mb-2">✅ Baseada em seus alimentos</div>
            <div className="mb-2">✅ Calorias ajustadas</div>
            <div className="mb-2">✅ Quantidade de cada alimento</div>
            <div className="mb-2">✅ Horário de cada refeição</div>
            <div className="mb-2">✅ Resumo sobre sua situação</div>
          </div>
          <div className="flex flex-col w-full h-20 justify-center items-center">
            <button className="flex w-10/12 p-1 items-center justify-center rounded-lg bg-orange-500 text-white">
              Comprar Agora
            </button>
          </div>
        </div>
        <div className="min-w-64 w-[20rem] h-auto shadow-md border border-gray-150 flex flex-col items-center pt-5">
          <div className="flex justify-center items-center pl-2 pr-2 rounded-full bg-orange-100 font-bold text-orange-500 text-[0.75rem]">
            O mais completo
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-2 font-bold text-md">
            Acompanhamento com a Nutricionista
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-1 font-bold text-2xl">
            R$ 29,99
          </div>
          <div className="flex flex-col h-full w-full pl-8 mt-8 gap-1 text-sm">
            <div className="mb-2">✅ Dieta modificada pela Nutri</div>
            <div className="mb-2">✅ Direito para ajustar sua dieta</div>
            <div className="mb-2">✅ Variedade de opções de refeições</div>
            <div className="mb-2">✅ Consulta feita pelo Whatsapp</div>
            <div className="mb-2">✅ Resultados mais rápidos</div>
            <div className="mb-2">✅ Dicas de Nutricionista</div>
          </div>
          <div className="flex flex-col w-full h-20 justify-center items-center gap-1">
            <button className="flex w-10/12 p-1 items-center justify-center rounded-lg bg-orange-500 text-white">
              Comprar Agora
            </button>
            <button className="flex w-10/12 p-1 items-center justify-center rounded-lg bg-orange-500 text-white">
              Como Funciona?
            </button>
          </div>
        </div>
        <div className="min-w-64 w-[20rem] h-auto shadow-md border border-gray-150 flex flex-col items-center pt-5">
          <div className="flex justify-center items-center pl-2 pr-2 rounded-full bg-orange-100 font-bold text-orange-500 text-[0.75rem]">
            Para Emagrecer e Definir
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-2 font-bold text-md">
            Emagrecer + Massa 💪
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-1 font-bold text-2xl">
            R$ 10,99
          </div>
          <div className="flex flex-col h-full w-full pl-8 mt-8 gap-1 text-sm">
            <div className="mb-2">✅ Dieta Totalmente Personalizada</div>
            <div className="mb-2">✅ Baseada em seus alimentos</div>
            <div className="mb-2">✅ Calorias ajustadas</div>
            <div className="mb-2">✅ Quantidade de cada alimento</div>
            <div className="mb-2">✅ Horário de cada refeição</div>
            <div className="mb-2">✅ Resumo sobre sua situação</div>
          </div>
          <div className="flex flex-col w-full h-20 justify-center items-center">
            <button className="flex w-10/12 p-1 items-center justify-center rounded-lg bg-orange-500 text-white">
              Comprar Agora
            </button>
          </div>
        </div>
        <div className="min-w-64 w-[20rem] h-auto shadow-md border border-gray-150 flex flex-col items-center pt-5">
          <div className="flex justify-center items-center pl-2 pr-2 rounded-full bg-orange-100 font-bold text-orange-500 text-[0.75rem]">
            Para ganho de massa
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-2 font-bold text-md">
            Ganho de Massa
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-1 font-bold text-2xl">
            R$ 14,99
          </div>
          <div className="flex flex-col h-full w-full pl-8 mt-8 gap-1 text-sm">
            <div className="mb-2">✅ Dieta Totalmente Personalizada</div>
            <div className="mb-2">✅ Baseada em seus alimentos</div>
            <div className="mb-2">✅ Calorias ajustadas</div>
            <div className="mb-2">✅ Quantidade de cada alimento</div>
            <div className="mb-2">✅ Horário de cada refeição</div>
            <div className="mb-2">✅ Resumo sobre sua situação</div>
          </div>
          <div className="flex flex-col w-full h-20 justify-center items-center">
            <button className="flex w-10/12 p-1 items-center justify-center rounded-lg bg-orange-500 text-white">
              Comprar Agora
            </button>
          </div>
        </div>
        <div className="min-w-64 w-[20rem] h-auto shadow-md border border-gray-150 flex flex-col items-center pt-5">
          <div className="flex justify-center items-center pl-2 pr-2 rounded-full bg-orange-100 font-bold text-orange-500 text-[0.75rem]">
            Para definição e ganho de massa
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-2 font-bold text-md">
            Definição + Massa
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-1 font-bold text-2xl">
            R$ 16,99
          </div>
          <div className="flex flex-col h-full w-full pl-8 mt-8 gap-1 text-sm">
            <div className="mb-2">✅ Dieta Totalmente Personalizada</div>
            <div className="mb-2">✅ Baseada em seus alimentos</div>
            <div className="mb-2">✅ Calorias ajustadas</div>
            <div className="mb-2">✅ Quantidade de cada alimento</div>
            <div className="mb-2">✅ Horário de cada refeição</div>
            <div className="mb-2">✅ Resumo sobre sua situação</div>
          </div>
          <div className="flex flex-col w-full h-20 justify-center items-center">
            <button className="flex w-10/12 p-1 items-center justify-center rounded-lg bg-orange-500 text-white">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
