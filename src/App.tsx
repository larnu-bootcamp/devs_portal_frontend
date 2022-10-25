import Header from "./components/Header";
import List from "./components/ListStudent";
import Ticket from "./assets/ticket.gif";

function App() {
  return (
    <div className="App font-fibraBold bg-fondoMorado min-h-screen">
      <Header />
      <div className="flex justify-between items-center flex-col py-8">
        <img src={Ticket} className="w-36" alt="ticket animado" />
        <h1 className="text-colorTitulo text-xl text-center mb-4">
          Encuentra el match perfecto de programadores para tu empresa
        </h1>
        <p className=" text-[15px] text-colorSubTitulo text-center">
          Talento de Latinoamérica al mundo
        </p>
      </div>
      <List />
    </div>
  );
}

export default App;
