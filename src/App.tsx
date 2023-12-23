// App.tsx
import { useEffect, useState } from "react";
import "./App.css";
import ErrorNotification from "./components/ErrorNotification/ErrorNotification";
import OptionGroup from "./components/OptionGroup/OptionGroup";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import { Character } from "./types/character";

function App() {
  const [query, setQuery] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedItems, setSelectedItems] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (query == null) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        setError("Error fetching characters");
        let interval = setInterval(() => {
          setError(null);
          clearInterval(interval);
        }, 4000);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        gap: "1rem",
      }}
    >
      <MultiSelect
        query={query}
        setQuery={setQuery}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      {isOpen && (
        <OptionGroup
          loading={loading}
          query={query}
          characters={characters}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}
      {error && <ErrorNotification message={error} />}
      {/* Render the ErrorNotification when there's an error */}
    </div>
  );
}

export default App;
