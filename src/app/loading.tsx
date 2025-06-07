import Loaders from "@/components/skletons/Loader";
import React from "react";

function loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Loaders />
    </div>
  );
}

export default loading;