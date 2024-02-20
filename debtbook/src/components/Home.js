import addCustomer from "../assets/images/add.png";
import AddForm from "./form/AddForm";
import {useContext} from "react";
import {AppData} from "../data/AppData";


export default function Home(){
    const {setContentType} = useContext(AppData);
    return (
        <div className="m-auto">
            <img src={addCustomer} className="mb-5"  alt="image" />
            <h1 className="text-2xl">Add New Customer</h1>
            <button
                className="rounded-2xl w-56 border-2 mt-2 bg-gray-900 text-stone-50 p-2 hover:bg-gray-700"
                onClick={() => setContentType(<AddForm title={"Add Customer"}/>)}>Add
            </button>
        </div>
    );
}