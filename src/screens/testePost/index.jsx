import React, { useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

function TestePost() {
  const [user, setUser] = useState(null); // Inicializa como null

  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const db = getFirestore();
  const userCollectionRef = collection(db, "Clientes");

  const createUserData = async () => {
    const userId = "pedro@pedro.com"; // Nome do documento
    const userDocRef = doc(userCollectionRef, userId);
    await setDoc(userDocRef, {
      teste2: [
        {
          nome: "Pedro",
          idade: 20,
          altura: "1.80",
          email: "pedro.mora.neto1993@gmail.com",
        },
        {
          nome: "Pedro2",
          idade: 220,
          altura: "1.820",
          email: "pedro2.mora.neto1993@gmail.com",
        },
      ],
    });
    console.log("Usuário criado com sucesso: ", userId);
  };

  const getUserData = async (userId) => {
    try {
      if (!userId) {
        console.error("ID do usuário não pode ser vazio!");
        return;
      }

      const userDocRef = doc(userCollectionRef, userId);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        console.log("Usuário encontrado: ", userSnapshot.data());
        setUser(userSnapshot.data()); // Salva os dados do Firestore
      } else {
        console.log("Nenhum usuário encontrado com esse ID.");
        setUser(null);
      }
    } catch (error) {
      console.error("Erro ao buscar usuário: ", error);
    }
  };

  return (
    <div>
      <button onClick={createUserData}>Postar</button>
      <button onClick={() => getUserData("pedro@pedro.com")}>Buscar</button>
      <div>
        {user && user.teste2 ? ( // Verifica se user e user.teste2 existem
          user.teste2.map((item, index) => (
            <div key={index}>
              <p>Nome: {item.nome}</p>
              <p>Email: {item.email}</p>
              <p>Idade: {item.idade}</p>
              <p>Altura: {item.altura}</p>
            </div>
          ))
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </div>
      <div>
        <img src="data:image/png;base64,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"></img>
      </div>
    </div>
  );
}

export default TestePost;
