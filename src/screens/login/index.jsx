import React from "react";
import mascote from '../../assets/cenoura.png';

const Login = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <img className="w-48 h-48" src={mascote}></img>
      <div className="flex flex-col mt-2 items-center">
        <h1 className="text-3xl font-bold">Entre com sua conta</h1>
      </div>
      <div className="flex flex-col w-96 mt-8">
        <input className="border border-gray-300 p-2 mb-1 rounded-md" type="text" placeholder="Usuário"></input>
        <input className="border border-gray-300 p-2 rounded-md" type="password" placeholder="Senha"></input>
      </div>
      <div className="flex flex-col w-96 mt-8">
        <button className="bg-orange-500 text-white p-2 rounded-md">Entrar</button>
      </div>
      <div className="flex flex-row mt-6 gap-2">
        <p>Esqueceu sua senha?</p>
        <a href={""} className="text-orange-500 underline">Redefinir</a>
      </div>
      <div className="flex flex-row mt-8 gap-2">
        <button className="rounded-md p-2 text-orange-500 bg-transparent border-solid border-2 border-orange-500 font-bold ">CRIAR UMA CONTA</button>
      </div>
    </div>
  ) 
};

export default Login;
