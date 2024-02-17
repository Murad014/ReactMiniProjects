import addCustomer from "./assets/images/add.png" ;
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home";
import Form from "./components/form/Form";
import Content from "./components/content/Content";
import {useState} from "react";

function App() {
    const [contentType, setContentType] = useState(<Home handleSetContentType={handleSetContentType}/>);

    function handleSetContentType(contentType){
        setContentType(contentType);
    }


    return (
      <div className="h-screen justify-items-stretch sm:flex sm:flex-col md:flex-row">
          <Sidebar handleSetContentType={handleSetContentType}/>
          {contentType}
      </div>

  );

}

export default App;
