import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function App() {
  return (
    <footer className="flex bg-[#C2A68C] w-full text-white px-24 py-8">
      <div className="flex flex-col w-[50vw] gap-5">
        <h1 className="text-5xl font-bold">Agitank</h1>
        <p>
          Aut voluptas culpa aut perferendis delectus qui fuga distinctio aut
          possimus similique ut laboriosam mollitia nam dignissimos nobis non
          voluptatem excepturi. Aut repudiandae fugit et voluptatem pariatur ea
          laborum tenetur ut expedita accusantium.
        </p>
        <div className="flex gap-3">
          <Instagram className="hover:brightness-95 hover:scale-105 cursor-pointer transition-all" />
          <Linkedin className="hover:brightness-95 hover:scale-105 cursor-pointer transition-all" />
          <Youtube className="hover:brightness-95 hover:scale-105 cursor-pointer transition-all" />
        </div>
        <button className="self-start outline-none outline-white p-1 hover:scale-110 hover:brightness-95 active:scale-100 transition-all">
          Back to top
        </button>
      </div>
      <div></div>
    </footer>
  );
}
