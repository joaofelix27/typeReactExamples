import SpanText from "./Components/SpanText";
import Title from "./Components/Title";

// 2
//  const titleData = {
//    firstText: "Não",
//    secondText: "primitivo",

//  }

function App() {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        width: "75rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
{/* 1 -  A props pode ser um dado primitivo  */}
      {/* <Title text="Bom dia"></Title> */}
{/* 2 - A props pode ser um dado não primitivo */}
      {/* <Title text={titleData}></Title>  */}
{/* 3 - A props pode ser um componente  */}
      {/* <Title text={<SpanText text="Teste componente"></SpanText>}></Title> */}
{/* 4 - Utilizando Children */}
      <Title text={<SpanText>Teste Componente com children</SpanText>}></Title>
    </div>
  );
}

export default App;
