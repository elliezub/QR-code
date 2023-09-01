import QrCode from "./assets/qr-code.png";

function App() {
  return (
    <main className="flex justify-center items-center bg-slate-950 min-h-screen">
      <div className="w-[300px] bg-indigo-950 p-6 rounded-lg text-center">
        <div className="bg-[#F7FAFF] rounded-lg p-2">
          <img src={QrCode} alt="" className="rounded-lg" />
        </div>

        <h1 className="text-violet-100 font-bold text-xl mx-4 my-5">
          Elevate Your Life with Cat NFTs
        </h1>
        <p className="text-violet-300/90 mb-4 text-sm mx-4">
          Scan the QR code to explore a world of Cat NFTs and transform your
          life.
        </p>
      </div>
    </main>
  );
}

export default App;
