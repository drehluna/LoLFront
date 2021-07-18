import { useState } from 'react';
import { UseName } from '../contexts/Name';
import '../styles/RightMenu.css'
import { OverView } from './OverView';
import { SearchBar } from './SearchBar';

import {account} from '../API/API'

export function RightMenu () {

    const {Name,setName} = UseName()

    const [ComponentUse, SetComponent] = useState(<OverView/>)

   
    
    return (
        <div className='RightMenu'>
               <SearchBar/>
               {ComponentUse}

               
        </div>
    );
}