const Datas = ({ filterCard }) => {
  return (
    <>
      <div className="filtercard" id="filterItems">
        <div id="filterItem">
          <div className="post id">
            <img src={filterCard.img_src} alt={filterCard.alt_name} />
            <div className="fname">
              <h3>{filterCard.name}</h3>
              <p>{filterCard.id}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datas;
