const ImageCard = ({ urls, rel, alt_description }) => {
  console.log(urls);

  return (
    <div>
      <img src={urls.small} rel={rel} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
