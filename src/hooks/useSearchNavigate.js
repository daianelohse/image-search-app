import { useNavigate } from "react-router-dom";

export function useSearchNavigate() {
  const navigate = useNavigate();

  function handleSearch(text) {
    const wordSearch = text.trim();
    if (!wordSearch) return;
    navigate(`/search?q=${encodeURIComponent(wordSearch)}`);
  }

  return handleSearch;
}