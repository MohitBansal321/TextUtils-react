import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  let [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>setAlert(null),1500);
  }
  const toggleMode=()=>{ 
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#031125";
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
    {/* <Router>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert }/>
      <div className="container my-3 pt-4">
      <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyse below" mode={mode}/>}>
          </Route>
        </Routes>
      </div>
      </Router> */}
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 pt-4">
        <TextForm showAlert={showAlert} heading="Enter the Text to analyse below" mode={mode}/>
      </div>
    </>
  );
}

export default App;