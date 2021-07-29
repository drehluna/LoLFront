import { account } from '../API/API';
import { UseName } from '../contexts/Name';
import { UseSpinner } from '../contexts/Spinner';
import '../styles/SearchBar.css'


export function SearchBar() {

    const {setName} = UseName()

    const {SetSpinner} = UseSpinner()


    async function GetData(user) {

        SetSpinner("NoFirstSearchSpinner")
        console.log('chamado')
        let resultAccount = await account(user)
        setName(resultAccount)
        
    }
    
    function OnSubmitEvent(event) {
        event.preventDefault();
        setName('')
        event.target[0].value !== '' ? GetData(event.target[0].value) : setName('')
        
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