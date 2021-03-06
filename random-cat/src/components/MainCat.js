const MainCat = ({ img, onLikeClick, savedCat }) => {
  const likeIcon = savedCat ? "đ" : "đ¤";
  return (
    <div className="main-cat">
      <img src={img} alt="ęł ěě´" width="400" />
      <button onClick={onLikeClick}>{likeIcon}</button>
    </div>
  );
};

export default MainCat;
