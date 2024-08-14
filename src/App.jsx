import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [image, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const handleMorePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query.trim() === "") return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setShowLoadMore(
          data.total > 10 && page < Math.ceil(data.total / data.total_pages)
        );
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleOpenModal = (modalImage) => {
    setModalImage(modalImage);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalImage({});
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {image.length > 0 && (
        <ImageGallery image={image} handleOpenModal={handleOpenModal} />
      )}

      <ImageModal
        modalImage={modalImage}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {showLoadMore && <LoadMoreBtn handleMorePage={handleMorePage} />}
    </div>
  );
};

export default App;
