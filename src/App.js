import { MainCard } from "./components/MainCard"
import NameProvider, { UseName } from './contexts/Name'
import SpinnerProvider from "./contexts/Spinner";
import "./styles/App.css"
function App() {

  

  return (
    <div className="App">
      <NameProvider>
        <SpinnerProvider>
      <MainCard/>
      </SpinnerProvider>
       </NameProvider>
    </div>
  );
}

export default App;
