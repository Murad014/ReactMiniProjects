import SidebarList from "./SidebarList";
import Header from "./Header";
import Home from "../Home";
import AddForm from "../form/AddForm";
import CustomerList from "../CustomerList";


export default function Sidebar({handleSetContentType, customers}){
    const navClass = "md:h-full md:w-72 sm:h-fit sm:w-screen flex flex-col bg-gray-900 border-r " +
        "overflow-y-auto";
    const liClass = "text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl";

    return (
        <nav className={navClass} >
            <Header />
            <SidebarList>
                <li className={liClass}
                    onClick={() => handleSetContentType(<Home handleSetContentType={handleSetContentType}
                                                              customers={customers}/>)}>
                    Home
                </li>

                <li className="text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl"
                    onClick={() => handleSetContentType(<AddForm title="Add Customer"
                                                                 handleSetContentType={handleSetContentType}
                                                                 customers={customers}/>)}>
                    Add Customer
                </li>

                <li className="text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl"
                    onClick={() => handleSetContentType(
                                    <CustomerList
                                        title="Customer List"
                                        customers={customers}
                                        handleSetContentType={handleSetContentType}

                                    />
                                )
                        }>
                    Customer List
                </li>

            </SidebarList>
        </nav>
    );
}