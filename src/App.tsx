import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./components/home";
import { Itinerary } from "./components/itinerary";
import { Places } from "./mocks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />

        {Places.map((place) => (
          <Route path={place.path} element={<Itinerary {...place} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
