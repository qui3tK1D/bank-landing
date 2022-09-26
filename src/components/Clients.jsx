import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <div className="flexCenter flex-wrap gap-y-8 my-8">
      {clients.map((client) => (
        <div key={client.id} className="flex-1 min-w-[120px]">
          <img
            alt={client.id}
            src={client.logo}
            className="w-20 ss:w-24 md:w-32 mx-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Clients;
