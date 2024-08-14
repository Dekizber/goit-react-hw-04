import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ image }) => {
  console.log(image);

  return (
    <ul>
      {image.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
