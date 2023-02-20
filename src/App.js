import { Toolbar } from "components/modules/Toolbar";
import { SettingBar } from "components/modules/SettingBar";
import { Canvas } from "components/modules/Canvas";

import './global.scss'

function App() {
  return (
    <div className="App">
        <Toolbar />
        <SettingBar />
        <Canvas />
    </div>
  );
}

export default App;
