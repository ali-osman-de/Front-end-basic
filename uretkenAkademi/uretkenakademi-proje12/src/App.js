import "./App.css";
import ImageGrid from "./components/ImageGrid";
import Navi from "./components/Navi";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="App ">
      <Navi />
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
