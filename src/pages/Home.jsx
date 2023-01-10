import MyInput from "../components/MyInput";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        background: "#1d2b3a",
        color: "#fff",
      }}
    >
      Home
      <MyInput place={"test"} />
    </div>
  );
};

export default Home;
