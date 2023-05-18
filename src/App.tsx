import Routes from "./helper/Routes";
import "./App.css";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {  
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Routes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
