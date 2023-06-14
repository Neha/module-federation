import { useContext } from "react";
import CountContext from "./Context";

function useCount() {
  return useContext(CountContext);
}

export default useCount;