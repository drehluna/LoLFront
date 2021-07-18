import '../styles/MainCard.css'
import { MenuLateral } from './MenuLateral'
import { RightMenu } from './RightMenu';

export function MainCard () {
    return (
        <div className='MainCard'>
           <MenuLateral/>
            <RightMenu/>
            
        </div>
    );

}
