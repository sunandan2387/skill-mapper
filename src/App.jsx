import Results from './screens/results/Results';
import UploadResume from './screens/uploadresume/UploadResume'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UploadResume />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
    </BrowserRouter>
           
        </div>
    );
}
export default App;