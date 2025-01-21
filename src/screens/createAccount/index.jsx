import React, { useState } from "react";
import mascote from "../../assets/cenoura.png";
import zap from "../../assets/zap.png";

const SignUp = () => {
  const [isAgree, setIsAgree] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <img className="w-48 h-48" src={mascote}></img>
      <div className="flex flex-col mt-2 items-center">
        <h1 className="text-3xl font-bold">Criar uma conta</h1>
      </div>
      <div className="flex flex-col w-4/12 mt-8">
        <input
          className="border border-gray-300 p-2 mb-1 rounded-md"
          type="text"
          placeholder="Email"
        ></input>
        <input
          className="border border-gray-300 mb-1 p-2 rounded-md"
          type="password"
          placeholder="Confirme seu email"
        ></input>
        <input
          className="border border-gray-300 mb-8 p-2 rounded-md"
          type="password"
          placeholder="Crie uma senha"
        ></input>
      </div>
      <div className="flex rounded-md bg-orange-200 items-center justify-center p-1 mb-2">
        Para instruções e contato
      </div>
      <div className="flex w-4/12 border border-gray-300 mb-3 p-2 rounded-md gap-2">
        <img src={zap} className="w-6"></img>
        <input
          type="text"
          placeholder="(DDD) 99999-9999"
          className="flex w-full"
        ></input>
      </div>

      <div className="flex flex-row mt-6 gap-2">
        {isAgree == false ? (
          <div
            className="flex w-5 h-5 border-solid border-2 border-orange-500 cursor-pointer"
            onClick={() => {
              setIsAgree(true);
            }}
          ></div>
        ) : (
          <div
            className="flex w-5 h-5 border-solid border-2 border-orange-500 bg-orange-500 cursor-pointer"
            onClick={() => {
              setIsAgree(false);
            }}
          >
            <div
              className="flex w-4 h-4 border-solid border-[1px] border-white bg-orange-500 cursor-pointer"
              onClick={() => {
                setIsAgree(false);
              }}
            ></div>
          </div>
        )}

        <p>Eu estou de acordo com os</p>
        <a href={""} className="text-orange-500 underline">
          Termos e Condições de uso
        </a>
        <p>da Empresa Tal.</p>
      </div>
      <div className="flex flex-col w-4/12 mt-8">
        <button className="bg-orange-500 text-white p-2 rounded-md">
          CRIAR CONTA
        </button>
      </div>

      <div className="flex flex-row mt-8 gap-2">
        <button className="rounded-md p-2 text-orange-500 bg-transparent border-solid border-2 border-orange-500 font-bold ">
          ENTRAR COM CONTA
        </button>
      </div>
    </div>
  );
};

export default SignUp;
