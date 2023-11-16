

import MainGraph from "./components/MainGraph/MainGraph";
import { Slider } from './components/Slider/Slider';
        
function App(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen ">
      <MainGraph />
      <Slider />

    </div>
  );
}

export default App;
