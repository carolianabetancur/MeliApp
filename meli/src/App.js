import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import ListItems from "./views/ListItems/ListItems";
import SpecificItem from "./views/SpecificItem/SpecificItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        <Home />
        <Routes>
          <Route path="items" element={<ListItems />} />
          <Route path="items/:id" element={<SpecificItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
