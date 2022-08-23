import Button from "./components/Button/Button";

function App() {
  const handleClick = () => console.log("Click!");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button onClick={handleClick}>Primary Button</Button>
    </div>
  );
}

export default App;
