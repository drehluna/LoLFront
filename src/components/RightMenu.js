import { useState } from 'react';
import '../styles/RightMenu.css'
import { OverView } from './OverView';
import { SearchBar } from './SearchBar';



export function RightMenu () {
    const [ComponentUse, SetComponent] = useState(<OverView/>)

   
    
    return (
        <div className='RightMenu'>
               <SearchBar/>
               {ComponentUse}

               
        </div>
    );
}