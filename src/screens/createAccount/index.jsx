import React, { useState } from "react";
import mascote from "../../assets/cenoura.png";
import zap from "../../assets/zap.png";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignIn = () => {
    createUserWithEmailAndPassword(email, password);
  };

  if (loading) {
    <p>Carregando...</p>;
  }

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center pt-10 pb-5">
      {/* <img className="w-48 h-48" src={mascote}></img> */}
      <div className="flex flex-col mt-2 items-center">
        <h1 className="text-3xl font-bold">Criar uma conta</h1>
      </div>
      <div className="flex flex-col w-96 mt-8">
        <input
          className="border border-gray-300 p-2 mb-1 rounded-md focus:outline-orange-500"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          className="border border-gray-300 mb-1 p-2 rounded-md focus:outline-orange-500"
          type="text"
          placeholder="Confirme seu email"
          onChange={(e) => {
            e.target.value == email
              ? console.log("EMAIL OK")
              : console.log("EMAIL ERRADO");
          }}
        ></input>
        <input
          className="border border-gray-300 mb-12 p-2 rounded-md focus:outline-orange-500"
          type="password"
          placeholder="Crie uma senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex rounded-md bg-orange-200 items-center justify-center p-1 mb-5">
        Para instruções e contato
      </div>
      <div className="flex w-96 border border-gray-300 mb-3 rounded-md gap-2 items-center p-[0.15rem]">
        <img src={zap} className="w-6 h-6 ml-2"></img>
        <input
          type="text"
          placeholder="(DDD) 99999-9999"
          className="flex w-full focus:outline-orange-500 p-2"
        ></input>
      </div>

      <div className="flex flex-row w-96 flex-wrap mt-6 gap-2 items-center justify-center">
        {isAgree == false ? (
          <button>
            <div
              className="flex w-5 h-5 border-solid border-2 border-orange-500 cursor-pointer"
              onClick={() => {
                setIsAgree(true);
              }}
            ></div>
          </button>
        ) : (
          <button>
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
          </button>
        )}

        <p>Eu estou de acordo com os</p>
        <a href={""} className="text-orange-500 underline">
          Termos e Condições de uso
        </a>
        <p>da Empresa Tal.</p>
      </div>
      <div className="flex flex-col w-96 mt-8">
        <button
          className="bg-orange-500 text-white p-2 rounded-md"
          onClick={() => {
            handleSignIn();
          }}
        >
          CRIAR CONTA
        </button>
      </div>

      <div className="flex flex-row mt-8 gap-2 mb-8">
        <Link to={"/"}>
          {" "}
          <button className="rounded-md p-2 text-orange-500 bg-transparent border-solid border-2 border-orange-500 font-bold ">
            ENTRAR COM CONTA
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
