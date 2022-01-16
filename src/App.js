import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayouts from "./pages/layouts/PlanLayouts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirm from "./pages/PhoneConfirm";

import CodeConfirm from "./pages/CodeConfirm";
import AllowNotifications from "./pages/AllowNotifications";

function App() {
  return (
    <BrowserRouter>
      <PlanLayouts>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/invite" element={<PhoneConfirm />} />
          <Route exact path="/code_confirm" element={<CodeConfirm />} />
          <Route
            exact
            path="/allow_notification"
            element={<AllowNotifications />}
          />
        </Routes>
      </PlanLayouts>
    </BrowserRouter>
  );
}

export default App;
