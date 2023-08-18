const Header = ({ closePopUp }) => {
  return (
    <>
      <header>
        <h2>New Message</h2>
        <div className="close" onClick={closePopUp}>
          &times;
        </div>
      </header>
    </>
  );
};

export default Header;
