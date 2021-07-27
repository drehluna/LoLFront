import { MainCard } from "./components/MainCard"
import NameProvider from './contexts/Name'
import "./styles/App.css"
function App() {

 
    // async function teste3 () {
    //   let result = await account('ehonda')

    //   console.log(result.rankeds[0])
    // }

    // teste3()

  return (
    <div className="App">
      <NameProvider>
      <MainCard/>
       </NameProvider>
    </div>
  );
}

export default App;
