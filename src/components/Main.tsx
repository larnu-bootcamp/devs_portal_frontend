import React from "react";
import List from "./ListStudent";
import Ticket from "../assets/ticket.gif";
const Main = () => {
  return (
    <div className="flex justify-between items-center flex-col py-8 gap-y-10">
      <div>
        <img src={Ticket} className="w-36 mx-auto" alt="ticket animado" />
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
};

export default Main;
