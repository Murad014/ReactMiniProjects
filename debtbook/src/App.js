import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home";
import {useState} from "react";

const exampleCustomers = [
    {
        name: "Murad",
        surname: "Guliyev",
        email: "quliyev.murad@yahoo.com",
        phone: "+994514617033",
        paymentList: [
            {
                paymentDescription: "Theory of Everything Book",
                paymentAmount: -20,
                paymentDate: "17-02-2024"
            },
            {
                paymentDescription: "Theory of Everything Book",
                paymentAmount: 20,
                paymentDate: "17-02-2024"
            }

        ]
    }
];

function App() {
    const [customers, setCustomers] = useState([]);
    const [contentType, setContentType] = useState(<Home handleSetContentType={handleSetContentType}
                                                         customers={customers}/>);

    function handleSetContentType(contentType){
        setContentType(contentType);
    }


    return (
      <div className="h-screen justify-items-stretch sm:flex sm:flex-col md:flex-row">
          <Sidebar handleSetContentType={handleSetContentType} customers={customers}/>
          {contentType}
      </div>

  );

}

export default App;
