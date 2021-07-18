
import '../styles/OverViwe.css'
import { Rank } from './Rank'

export function OverView () {

    

    return (
       <div className='OverViwe'>
        <div className='Title'>Overview</div>

        <div className='Informations'>
            <Rank/>
        </div>
       </div> 
    );
}