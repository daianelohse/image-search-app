// src/pages/HomePage.jsx
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ImageSearch from "../components/ImageSearch";
import { useSearchNavigate } from "../hooks/useSearchNavigate";


export default function HomePage() {
  const navigate = useNavigate();


const handleSearch = useSearchNavigate();

  return (
    <div className="container mx-auto mb-16">
      {/* NavBar fica no Layout, então não entra aqui */}
      <Hero>
        <ImageSearch searchText={handleSearch} />
      </Hero>
      {/* Sem Gallery na Home – resultados ficam na SearchPage */}
    </div>
  );
}
