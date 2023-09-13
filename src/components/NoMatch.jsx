import React from "react";
import { useLocation } from "react-router-dom";

function NoMatch() {

  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div>
      <h1>NoMatch for {location.pathname}</h1>
    </div>
  );
}

export default NoMatch;