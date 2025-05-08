import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-2 hover:bg-amber-300 px-6 md:hover:bg-white">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
