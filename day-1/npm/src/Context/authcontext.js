import { act, createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

const initialState = { user: null };
export const authcontext = createContext();

function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <authcontext.Provider value={{ state, dispatch }}>
      {children}
    </authcontext.Provider>
  );
}

export default MyContextProvider;
