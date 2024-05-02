import { useContext } from "react";
import { MonPicsContext } from "../contexts";

const useMonPics = () => {
  const context = useContext(MonPicsContext);
  if (!context) {
    throw new Error("useMonPics must be used within a provider");
  }
  return context;
};

export default useMonPics;
