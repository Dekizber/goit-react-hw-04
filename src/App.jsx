import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./api";

const App = () => {
  const [image, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  console.log(image);

  const handleChangeQuery = (newQuery) => {
    setImages([]);
    setPage(0);
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query.trim() === "") return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        console.log(data.results);

        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <ImageGallery image={image} />
    </div>
  );
};

export default App;
