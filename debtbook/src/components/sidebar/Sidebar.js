import SidebarList from "./SidebarList";
import Header from "./Header";
import Home from "../Home";
import AddForm from "../form/AddForm";
import CustomerList from "../CustomerList";
import {useContext} from "react";
import {AppData} from "../../data/AppData";


export default function Sidebar(){
    const {setContentType} = useContext(AppData);

    const navClass = "md:h-full md:w-72 sm:h-fit sm:w-screen flex flex-col bg-gray-900 border-r " +
        "overflow-y-auto";
    const liClass = "text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl";

    return (
        <nav className={navClass} >
            <Header />
            <SidebarList>
                <li className={liClass}
                    onClick={() => setContentType(<Home />)} >
                    Home
                </li>

                <li className="text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl"
                    onClick={() => setContentType(<AddForm title="Add Customer" />)}>
                    Add Customer
                </li>

                <li className="text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl"
                    onClick={() => setContentType(<CustomerList title="Update Customer" />)}>
                    Customer List
                </li>

            </SidebarList>
        </nav>
    );
}