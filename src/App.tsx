import {  useReducer } from "react";
import { PhoneList } from "./components/PhoneList";
import { PhoneContext } from "./context/PhoneContext";
import { initialState, listReducer } from "./reducers/listReducer";







function PhoneListApp() {

  const [ state, dispatch ]= useReducer(listReducer, initialState);

  return (
    <>
      <h1>Phone List Complex Version</h1>
      <hr/>
      <PhoneContext.Provider value={{
                          state,
                          dispatch
      }}
      >

      <PhoneList />



      </PhoneContext.Provider>




    </>
  );
}

export default PhoneListApp;
