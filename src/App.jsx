import { Suspense } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import Recharts from "./Components/Recharts/Recharts";
import Marks from "./Components/Marks/Marks";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const marksPromise = axios.get("marks.json");

function App() {
  return (
    <>
      <NavBar></NavBar>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-secondary"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <Recharts></Recharts>
        <Marks marksPromise={marksPromise}></Marks>
      </main>
    </>
  );
}

export default App;
