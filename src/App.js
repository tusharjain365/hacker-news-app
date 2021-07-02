import './App.css';
import SearchForm from "./SeachForm";
import Buttons from "./Buttons";
import Stories from "./Stories";
function App() {
  return (
    <div className="main-container">
      <SearchForm/>
      <Buttons/>
      <Stories/>
    </div>
  );
}

export default App;
