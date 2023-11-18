

import MainGraph from "./components/MainGraph/MainGraph";
import { Slider } from './components/Slider/Slider';
        
function App(): JSX.Element {
  return (
    <div className="flex flex-col space-y-2">
      <MainGraph />
      <Slider />

    </div>
  );
}

export default App;
