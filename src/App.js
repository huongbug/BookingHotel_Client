import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { publicRoutes } from "./routers/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.component;
            return <Route key={index} path={route.path} element={<Layout />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
