import "./styles.css";
import ReactPost from "./Components/ReactPost";
import { useState } from "react";
export default function App() {
  const [signIn, SignOut] = useState(false);
  const BulletinBoard = [
    {
      question: "Vad är tre fördelar med att använda React?",
      answer: [
        "Enkelt att underhålla : Enkelt att använda och skapa logiken i komopoenter ",
        "Att skriva komponenter, upprepa systemkomponenter, dokumentobjektmodeller (DOM), enkelriktad riktad data och verktyg för sökmotoroptimering.",
        "En viktig fördelar med ReactJS är flera utvecklarverktyg, anti-bug-funktioner, funktionella ramar, community-utveckling och ansedda resurser samt React-tjänster ex: Felsökningstillägg, Appkompatibilitet, Användarutveckling, Virtuell DOM, Applikationsdesigner ",
        "Störst community, Stort ekosystem, Skalbart, Flexibelt, Kan användas både för Native (React Native) och Webb, Snabb rendering med virtuell DOM, Medelsvår inlärningskurva",
      ],
    },
    {
      question:
        "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: [
        "Single-page applikation (SPA) är en webbapplikation som inte behöver laddas om eller uppdateras under processen, Detta tillåter oss att använda webbplatser utan att ladda in hela nya sidor från dess server som hos en vanlig webbplats",
        "Att använda en SPA kan resultera i bättre prestanda och en mer dynamisk upplevelse",
        "Att vi kan byta och uppdatera data utan att behöva att uppdatera webbplatsen.",
        "Kort fattat så håller en SPA en kopia av nuvarande dokumentet i annat format som den kan arbeta på ett snabbare och effektiv sätt. "
      ],
    },
    {
      question: "Nämn tre skillnader mellan React och Angular.",
      answer: [
        "React ägs av Facebook 2013, Kräver att du lär dig JSX + js(ES5/Es6), VirtualDOM, Frontend-library, Finns ingen riktig definierad metodologi om hur du implementerar React. ",
        "Angular ägs och underhålls av Google 2016, Kräver att du lär dig TypeScript + HTML, RegularDOM, Framework, Existerande community-konventioner och har en definierad implementationsmetodologi.",
      ],
    },
  ];

  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => {
          SignOut(!signIn);
        }}
      >
        {" "}
        {signIn ? "Sign Out" : "Sign In"}
      </button>
      {signIn && <ReactPost React={BulletinBoard} />}
      <span>InlämningsUpggift 1 </span>
    </div>
  );
}
