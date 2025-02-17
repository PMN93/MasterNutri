import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const Exerc = () => {
  const db = getFirestore();
  const userCollectionRef = collection(db, "Clientes");
  const userId = "pedro.mora.neto1993@gmail.com";

  const [user, setUser] = useState([]);
  const [cargas, setCargas] = useState({}); // Estado local para armazenar cargas temporárias

  const getUserData = async (userId) => {
    try {
      if (!userId) return;

      const userDocRef = doc(userCollectionRef, userId);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        const data = userSnapshot.data().peito;
        setUser(data);

        // Inicializa o estado de cargas com os valores do Firestore
        const cargasIniciais = {};
        data.forEach((item, index) => {
          cargasIniciais[index] = item.carga;
        });
        setCargas(cargasIniciais);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Erro ao buscar usuário: ", error);
    }
  };

  const updateCarga = async (index) => {
    try {
      if (!userId) return;

      const novaCarga = cargas[index]; // Pega a carga do estado local

      const userDocRef = doc(userCollectionRef, userId);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        let novosExercicios = [...userData.peito];

        // Atualiza a carga no array
        novosExercicios[index].carga = novaCarga;

        // Salva no Firestore
        await setDoc(userDocRef, { peito: novosExercicios }, { merge: true });

        // Atualiza o estado global
        setUser(novosExercicios);
      }
    } catch (error) {
      console.error("Erro ao atualizar carga:", error);
    }
  };

  useEffect(() => {
    getUserData(userId);
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center overflow-auto">
      <div className="flex flex-col w-full justify-start items-start p-5">
        <p className="font-bold text-3xl w-14 h-14 border rounded-full flex items-center justify-center shadow-md border-gray-300">
          A
        </p>
        <div className="flex flex-row w-full justify-center items-center">
          <p className="font-bold text-5xl">PEITO</p>
        </div>

        {user &&
          user.map((item, index) => (
            <div key={index} className="flex flex-col w-full mt-12 rounded-xl p-5 gap-3 border-2 border-gray-300">
              <div className="flex w-full">
                <p className="flex w-1/3 justify-start font-bold text-xl">Exercício: ▶</p>
                <p className="flex w-1/3 justify-center font-bold text-xl">Série:</p>
                <p className="flex w-1/3 justify-end font-bold text-xl">Carga:</p>
              </div>
              <div className="flex flex-row w-full">
                <p className="flex w-1/3 justify-start font-medium text-lg">{item.exc}</p>
                <p className="flex w-1/3 justify-center font-medium text-lg">{item.serie}</p>
                <div className="flex w-1/3 justify-end font-medium text-lg">
                  <input
                    className="border border-gray-500 w-16 h-10 font-medium rounded-lg p-2"
                    type="number"
                    value={cargas[index] || ""}
                    onChange={(e) => {
                      const novaCarga = e.target.value;
                      setCargas((prevCargas) => ({
                        ...prevCargas,
                        [index]: novaCarga,
                      }));
                    }}
                    onBlur={() => updateCarga(index)} // Salva no Firestore ao sair do input
                  />
                </div>
              </div>
            </div>
          ))}

        <div className="flex w-full p-5 mt-5 items-center justify-center">
          <button
            className="bg-black text-white font-bold text-2xl rounded-lg p-3"
            onClick={() => getUserData(userId)}
          >
            Atualizar Dados
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exerc;
