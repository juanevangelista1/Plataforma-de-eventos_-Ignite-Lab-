import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}

// Element é a propriedade que mostra o elemento em tela quando o usuário está na rota indicada pelo path 