const InitExerc = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center overflow-auto">
      <div className="flex flex-col bg-black w-full justify-center items-center pt-8">
        <p className="flex text-white font-bold text-5xl mb-10">Treinos</p>
      </div>

          <div className="flex flex-col w-full h-screen">
              
              <div className="flex flex-wrap w-full p-10 gap-20 items-center justify-center">
                  
          <div className="bg-white w-64 h-64 rounded-2xl flex flex-col border-2 border-black">
            <div className="flex flex-col w-full p-4">
              <p className="text-2xl font-bold">A</p>
            </div>
            <div className="flex flex-col w-full h-full p-4 items-center pt-12">
              <p className="text-3xl font-bold">Peito</p>
            </div>
                  </div>
                  <div className="bg-white w-64 h-64 rounded-2xl flex flex-col border-2 border-black">
            <div className="flex flex-col w-full p-4">
              <p className="text-2xl font-bold">B</p>
            </div>
            <div className="flex flex-col w-full h-full p-4 items-center pt-12">
              <p className="text-3xl font-bold">Braço</p>
            </div>
                  </div>
                  <div className="bg-white w-64 h-64 rounded-2xl flex flex-col border-2 border-black">
            <div className="flex flex-col w-full p-4">
              <p className="text-2xl font-bold">C</p>
            </div>
            <div className="flex flex-col w-full h-full p-4 items-center pt-12">
              <p className="text-3xl font-bold">Perna</p>
            </div>
                  </div>
                  <div className="bg-white w-64 h-64 rounded-2xl flex flex-col border-2 border-black">
            <div className="flex flex-col w-full p-4">
              <p className="text-2xl font-bold">D</p>
            </div>
            <div className="flex flex-col w-full h-full p-4 items-center pt-12">
              <p className="text-3xl font-bold">Costa</p>
            </div>
                  </div>
                  <div className="bg-white w-64 h-64 rounded-2xl flex flex-col border-2 border-black">
            <div className="flex flex-col w-full p-4">
              <p className="text-2xl font-bold">E</p>
            </div>
            <div className="flex flex-col w-full h-full p-4 items-center pt-12">
              <p className="text-3xl font-bold">Ombro</p>
            </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default InitExerc;
