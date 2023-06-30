import "./App.css";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function App() {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const res = await fetch(
      `https://api.adviceslip.com/advice?t=${Math.random()}`
    );
    const json = await res.json();
    setId(json.slip.id);
    setAdvice(json.slip.advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="min-h-screen bg-custom-Dark-Blue flex items-center justify-center px-5">
      <main className="bg-custom-Dark-Grayish-Blue rounded-lg md:rounded-xl text-center shadow-lg max-w-lg">
        {/* The ID of an advice */}
        <span className="inline-block text-custom-Neon-Green uppercase tracking-[0.175rem] text-xs pt-10 pb-6">
          Advice #{id}
        </span>

        {/* The actual advice */}
        <h1 className="text-custom-Light-Cyan text-2xl px-6">
          <FaQuoteLeft className="inline h-2 mb-4 -mr-2" />
          {advice}
          <FaQuoteRight className="inline h-2 mb-4 -ml-2" />
        </h1>

        {/* Divider */}
        <img
          src="./images/pattern-divider-mobile.svg"
          className="block mx-auto mt-6"
          alt="divider"
        />

        {/* Get random advice button */}
        <div
          role="button"
          onClick={() => fetchAdvice()}
          className="bg-custom-Neon-Green rounded-full h-16 w-16 grid place-content-center mx-auto translate-y-8 cursor-pointer shadow-3xl button-shadow my-transition"
        >
          <img src="./images/icon-dice.svg" alt="get random advice button" />
        </div>
      </main>
    </div>
  );
}
