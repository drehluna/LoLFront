import { account } from '../API/API';
import { UseName } from '../contexts/Name';
import '../styles/SearchBar.css'

export function SearchBar() {

    const {setName} = UseName()


    async function GetData(user) {
        console.log('chamado')
        let resultAccount = await account(user)
        setName(resultAccount)
        
    }
    
    function OnSubmitEvent(event) {
        event.preventDefault();
        
        GetData(event.target[0].value)
        
    }

    


    return (
        <form onSubmit={OnSubmitEvent}>
            <input type='input' className='SearchInput' placeholder="Search summoner or champion" />
            <button> 
                <img src="search.svg"></img>
            </button>



        </form>
    );
}