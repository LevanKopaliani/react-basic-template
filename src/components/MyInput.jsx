import "../styles/MyInput.css";

const MyInput = ({ place, type = "text" }) => {
  return (
    <>
      <div className="inputbox">
        <input type={type} required="required" />
        <span>{place}</span>
      </div>
    </>
  );
};

export default MyInput;
