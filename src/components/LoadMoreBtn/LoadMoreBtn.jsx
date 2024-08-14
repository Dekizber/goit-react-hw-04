import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleMorePage }) => {
  return (
    <div className={s.btnContainer}>
      <button onClick={handleMorePage} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
