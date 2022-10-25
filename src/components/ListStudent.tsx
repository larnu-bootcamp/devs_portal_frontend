import React from "react";
import { Icon } from "@iconify/react";
const ListStudent = () => {
  return (
    <div className="bg-white rounded-xl mx-5 py-8 px-5">
      <div>
        <div className="flex gap-x-8 items-center ">
          <img
            src="https://i.pravatar.cc/300"
            className="rounded-full w-24"
            alt="image  dev"
          />
          <div className="text-colorTitulo w-1/2">
            <h1 className="mb-2">Camila Isadora Valenzuela Fierro</h1>
            <p className="font-fibraRegular text-xs mb-2">
              FullStack developer
            </p>
            <small className="font-fibraRegular text-gray-400 flex items-center">
              <Icon className="text-sm mr-1" icon="fa6-solid:location-dot" />
              Santiago, Chile
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStudent;
