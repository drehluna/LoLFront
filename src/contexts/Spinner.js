import { createContext, useContext, useState } from "react";

const SpinnerContext = createContext();

export default function SpinnerProvider({children}) {
    const [Spinner, SetSpinner] = useState('NoFirstSearch')

    return (
        <SpinnerContext.Provider

        value={{
              Spinner,
              SetSpinner,
              
        }}
        >
          {children}  
        </SpinnerContext.Provider>
    );

}

export function UseSpinner() {
    const context = useContext(SpinnerContext)

    const {Spinner, SetSpinner} = context
    

    return {Spinner, SetSpinner}
}