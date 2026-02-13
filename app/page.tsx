import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">
          Festa Kosovo
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Pronađite savršenu salu za vašu proslavu.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
            Pretraži sale
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition">
            Dodaj svoj objekat
          </button>
        </div>
      </div>
    </main>
  );
}