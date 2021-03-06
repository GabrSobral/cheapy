import { 
  createContext, 
  Dispatch, 
  ReactNode,
  useContext,
  useReducer
} from "react";

import { ISignUpAction, ISignUpState, SignUpReducer } from "./reducer";

interface SignUpContextProps {
  SignUpState: ISignUpState;
  SignUpDispatch: Dispatch<ISignUpAction>;
}

export const SignUpContext = createContext({} as SignUpContextProps);

export function SignUpProvider({ children }: { children: ReactNode }){
  const initialstate = {
    name: "",
    email: "",
    password: "",
    confirmationPassword: "",
    CPF: "",
    token: "",
    CEP: "",
    state: "",
    country: "Brasil",
    city: "",
  };
  const [ SignUpState, SignUpDispatch ] = useReducer(SignUpReducer, initialstate);

  return(
    <SignUpContext.Provider
      value={{ 
        SignUpState,
        SignUpDispatch
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}

export function useSignUp(){
  return useContext(SignUpContext);
}