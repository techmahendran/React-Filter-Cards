import Header from "./components/Header";
import Form from "./components/Form";
import Filterdata from "./components/Datas";

import { useState } from "react";

const cardDatas = [
  {
    img_src: "Images/image 1.png",
    name: "Daveid",
    id: "@dav_id",
    alt_name: "image_1",
  },
  {
    img_src: "Images/image 2.png",
    name: "Christy",
    id: "@christy",
    alt_name: "image_2",
  },
  {
    img_src: "Images/image 3.png",
    name: "James Lowther",
    id: "@james lowther",
    alt_name: "image_3",
  },
  {
    img_src: "Images/image 4.png",
    name: "Danica",
    id: "@danica",
    alt_name: "image_4",
  },
];

function App() {
  const [isActive, setIsActive] = useState(false);

  const [filterCards, setFilterCards] = useState(cardDatas);

  const activeBtn = () => {
    setIsActive(!isActive);
  };

  const closePopUp = () => {
    setIsActive(!isActive);
  };

  const handleInputChange = (inputValue) => {
    const filterDatas = cardDatas.filter((cardData) => {
      return cardData.name.toLowerCase().includes(inputValue);
    });

    setFilterCards(filterDatas);
  };

  return (
    <>
      <div className="container">
        <div className="btn">
          <button onClick={activeBtn} className="btn_active">
            Open Filter Cards
          </button>
        </div>

        {isActive && (
          <div className="box bgc">
            <main>
              {/* Header */}
              <Header closePopUp={closePopUp} />

              {/* Form */}
              <Form handleInputChange={handleInputChange} />

              <h4 className="reset">reset convercations</h4>

              {/* filterItem content */}

              <div className="content">
                {filterCards.map((filterCard, index) => {
                  return <Filterdata filterCard={filterCard} key={index} />;
                })}
              </div>

              {filterCards.length === 0 && <p className="errorMsg">No Cards</p>}
            </main>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
