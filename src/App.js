import "./App.css";
import { Routes, Route } from "react-router-dom";
import UsingReff from "./hooks/UsingRef";
import UsingEffect from "./hooks/UsingEffect";
import UsingReducer from "./hooks/UsingReducer";
import UsingState from "./hooks/UsingState";
import UsingLayout from "./hooks/UsingLayout";
import Context from "./hooks/UseContext/Context";
import Callback from "./hooks/UseCallBack/Callback";
import UseMemo from "./hooks/UseMemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route>
            <Route path="useeffect" element={<UsingEffect />} />
            <Route path="useRef" element={<UsingReff />} />
            <Route path="usereducer" element={<UsingReducer />} />
            <Route path="usestate" element={<UsingState />} />
            <Route path="useLayoutEffect" element={<UsingLayout />} />
            <Route path="context" element={<Context />} />
            <Route path="callback" element={<Callback />} />
            <Route path="useMemo" element={<UseMemo />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
