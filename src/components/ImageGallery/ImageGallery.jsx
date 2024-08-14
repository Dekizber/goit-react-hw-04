import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ image, handleOpenModal }) => {
  return (
    <ul className={s.list}>
      {image.map((item) => {
        return (
          <li className={s.item} key={item.id}>
            <ImageCard {...item} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
