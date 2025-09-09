// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useSearchNavigate } from "../hooks/useSearchNavigate";

export default function Layout() {
  const handleSearch = useSearchNavigate();
  return (
    <>
      <NavBar onSearch={handleSearch} /> 
      <main className="container mx-auto p-4">
        <Outlet /> {/* Aqui aparece a página atual */}
      </main>
    </>
  );
}