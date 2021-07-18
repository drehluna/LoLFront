import { createContext, useContext, useState } from "react";

const NameContext = createContext();

export default function NameProvider({children}) {
    const [Name, setName] = useState('')
    const [ArraySolo, SetArraySolo] = useState('')

    return (
        <NameContext.Provider

        value={{
              Name,
              setName,
              ArraySolo, 
              SetArraySolo,
        }}
        >
          {children}  
        </NameContext.Provider>
    );

}

export function UseName() {
    const context = useContext(NameContext)

    const {Name, setName, ArraySolo, SetArraySolo} = context
    

    return {Name, setName, ArraySolo, SetArraySolo}
}