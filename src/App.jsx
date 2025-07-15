import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingSreen";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false); 

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    </>
  )
}

export default App
