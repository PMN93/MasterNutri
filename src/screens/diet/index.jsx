import React, { useState } from "react";

const Diet = () => {
  const [cafeManha, setCafeManha] = useState(false);
  const [lancheManha, setLancheManha] = useState(false);
  const [almoco, setAlmoco] = useState(false);
  const [lancheTarde, setLancheTarde] = useState(false);
  const [jantar, setJantar] = useState(false);
  const [treino, setTreino] = useState(false);

  return (
    <div className="flex flex-col max-w-11/12 bg-gray-200 gap-10 pb-10">
    <div className="flex min-h-screen bg-gray-200 pt-28">
      <div className="flex flex-col w-screen border border-gray-300 border-t-8 border-t-orange-500 items-center rounded-lg shadow-md p-3 gap-3 ml-96 mr-96">
        <div className="flex w-full h-20 items-center justify-center p-8 font-bold">
          Veja sua dieta abaixo 👇
        </div>
        <div
          className={
            cafeManha == false
              ? "flex w-full h-20 border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : cafeManha == true
              ? "flex w-full h-auto border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : ""
          }
          onClick={() => {
            setCafeManha(!cafeManha);
          }}
        >
          {cafeManha == false ? (
            "Conteúdo do Café"
          ) : cafeManha == true ? (
            <div className="flex flex-col items-center justify-center gap-5 space-y-">
              <p>Conteúdo do Café</p>{" "}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                doloremque fugiat saepe explicabo, beatae autem sapiente
                voluptatem tempore iste nam, reprehenderit deserunt! Laudantium
                soluta pariatur quisquam hic possimus fuga veritatis!Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Et doloremque
                fugiat saepe explicabo, beatae autem sapiente voluptatem tempore
                iste nam, reprehenderit deserunt! Laudantium soluta pariatur
                quisquam hic possimus fuga veritatis!Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Et doloremque fugiat saepe
                explicabo, beatae autem sapiente voluptatem tempore iste nam,
                reprehenderit deserunt! Laudantium soluta pariatur quisquam hic
                possimus fuga veritatis!Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et doloremque fugiat saepe explicabo, beatae
                autem sapiente voluptatem tempore iste nam, reprehenderit
                deserunt! Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga veritatis!
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            lancheManha == false
              ? "flex w-full h-20 border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : lancheManha == true
              ? "flex w-full h-auto border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : ""
          }
          onClick={() => {
            setLancheManha(!lancheManha);
          }}
        >
          {lancheManha == false ? (
            "Conteúdo do Lanche da Manhã"
          ) : lancheManha == true ? (
            <div className="flex flex-col items-center justify-center gap-5">
              <p>Conteúdo do Lanche da Manhã</p>{" "}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                doloremque fugiat saepe explicabo, beatae autem sapiente
                voluptatem tempore iste nam, reprehenderit deserunt! Laudantium
                soluta pariatur quisquam hic possimus fuga veritatis!Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Et doloremque
                fugiat saepe explicabo, beatae autem sapiente voluptatem tempore
                iste nam, reprehenderit deserunt! Laudantium soluta pariatur
                quisquam hic possimus fuga veritatis!Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Et doloremque fugiat saepe
                explicabo, beatae autem sapiente voluptatem tempore iste nam,
                reprehenderit deserunt! Laudantium soluta pariatur quisquam hic
                possimus fuga veritatis!Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et doloremque fugiat saepe explicabo, beatae
                autem sapiente voluptatem tempore iste nam, reprehenderit
                deserunt! Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga veritatis!
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            almoco == false
              ? "flex w-full h-20 border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : almoco == true
              ? "flex w-full h-auto border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : ""
          }
          onClick={() => {
            setAlmoco(!almoco);
          }}
        >
          {almoco == false ? (
            "Conteúdo do Almoço"
          ) : almoco == true ? (
            <div className="flex flex-col items-center justify-center gap-5">
              <p>Conteúdo do Almoço</p>{" "}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                doloremque fugiat saepe explicabo, beatae autem sapiente
                voluptatem tempore iste nam, reprehenderit deserunt! Laudantium
                soluta pariatur quisquam hic possimus fuga veritatis!Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Et doloremque
                fugiat saepe explicabo, beatae autem sapiente voluptatem tempore
                iste nam, reprehenderit deserunt! Laudantium soluta pariatur
                quisquam hic possimus fuga veritatis!Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Et doloremque fugiat saepe
                explicabo, beatae autem sapiente voluptatem tempore iste nam,
                reprehenderit deserunt! Laudantium soluta pariatur quisquam hic
                possimus fuga veritatis!Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et doloremque fugiat saepe explicabo, beatae
                autem sapiente voluptatem tempore iste nam, reprehenderit
                deserunt! Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga veritatis!
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            lancheTarde == false
              ? "flex w-full h-20 border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : lancheTarde == true
              ? "flex w-full h-auto border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : ""
          }
          onClick={() => {
            setLancheTarde(!lancheTarde);
          }}
        >
          {lancheTarde == false ? (
            "Conteúdo do Lanche da Tarde"
          ) : lancheTarde == true ? (
            <div className="flex flex-col items-center justify-center gap-5">
              <p>Conteúdo do Lanche da Tarde</p>{" "}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                doloremque fugiat saepe explicabo, beatae autem sapiente
                voluptatem tempore iste nam, reprehenderit deserunt! Laudantium
                soluta pariatur quisquam hic possimus fuga veritatis!Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Et doloremque
                fugiat saepe explicabo, beatae autem sapiente voluptatem tempore
                iste nam, reprehenderit deserunt! Laudantium soluta pariatur
                quisquam hic possimus fuga veritatis!Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Et doloremque fugiat saepe
                explicabo, beatae autem sapiente voluptatem tempore iste nam,
                reprehenderit deserunt! Laudantium soluta pariatur quisquam hic
                possimus fuga veritatis!Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et doloremque fugiat saepe explicabo, beatae
                autem sapiente voluptatem tempore iste nam, reprehenderit
                deserunt! Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga veritatis!
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            jantar == false
              ? "flex w-full h-20 border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : jantar == true
              ? "flex w-full h-auto border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : ""
          }
          onClick={() => {
            setJantar(!jantar);
          }}
        >
          {jantar == false ? (
            "Conteúdo do Jantar"
          ) : jantar == true ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p>Conteúdo do Jantar</p>{" "}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                doloremque fugiat saepe explicabo, beatae autem sapiente
                voluptatem tempore iste nam, reprehenderit deserunt! Laudantium
                soluta pariatur quisquam hic possimus fuga veritatis!Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Et doloremque
                fugiat saepe explicabo, beatae autem sapiente voluptatem tempore
                iste nam, reprehenderit deserunt! Laudantium soluta pariatur
                quisquam hic possimus fuga veritatis!Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Et doloremque fugiat saepe
                explicabo, beatae autem sapiente voluptatem tempore iste nam,
                reprehenderit deserunt! Laudantium soluta pariatur quisquam hic
                possimus fuga veritatis!Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et doloremque fugiat saepe explicabo, beatae
                autem sapiente voluptatem tempore iste nam, reprehenderit
                deserunt! Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga veritatis!
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            treino == false
              ? "flex w-full h-20 border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : treino == true
              ? "flex w-full h-auto border border-gray-300 rounded-md items-center justify-center shadow-md p-8"
              : ""
          }
          onClick={() => {
            setTreino(!treino);
          }}
        >
          {treino == false ? (
            "Treino"
          ) : treino == true ? (
            <div className="flex flex-col items-center justify-center gap-5">
              <p>Treino</p>{" "}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                doloremque fugiat saepe explicabo, beatae autem sapiente
                voluptatem tempore iste nam, reprehenderit deserunt! Laudantium
                soluta pariatur quisquam hic possimus fuga veritatis!Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Et doloremque
                fugiat saepe explicabo, beatae autem sapiente voluptatem tempore
                iste nam, reprehenderit deserunt! Laudantium soluta pariatur
                quisquam hic possimus fuga veritatis!Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Et doloremque fugiat saepe
                explicabo, beatae autem sapiente voluptatem tempore iste nam,
                reprehenderit deserunt! Laudantium soluta pariatur quisquam hic
                possimus fuga veritatis!Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Et doloremque fugiat saepe explicabo, beatae
                autem sapiente voluptatem tempore iste nam, reprehenderit
                deserunt! Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga
                veritatis!Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et doloremque fugiat saepe explicabo, beatae autem
                sapiente voluptatem tempore iste nam, reprehenderit deserunt!
                Laudantium soluta pariatur quisquam hic possimus fuga veritatis!
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex w-full h-20 border border-gray-300 rounded-md items-center justify-center shadow-md p-8"></div>
      </div>
      </div>
      <div className="flex flex-col border border-gray-300 border-t-8 border-t-orange-500 items-center rounded-lg shadow-md p-3 gap-3 ml-96 mr-96">Teste</div>
      </div>
  );
};

export default Diet;
