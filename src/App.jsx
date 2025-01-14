import { Outlet } from "react-router";
import './App.css';
import { SideBarStateProvider } from "./StateContext";
function App() {
  return (
    <SideBarStateProvider>  
      <div className="app">
        <Outlet/>
      </div>
    </SideBarStateProvider>
  );
}

export default App;