import SidebarList from "./SidebarList";
import Header from "./Header";
import Home from "../Home";
import Form from "../form/Form";


export default function Sidebar({handleSetContentType}){
    return (
        <nav className="md:h-full md:w-72 sm:h-fit sm:w-screen flex flex-col bg-gray-900 border-r overflow-y-auto" >
            <Header />
            <SidebarList>
                <li className="text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl"
                    onClick={() => handleSetContentType(<Home handleSetContentType={handleSetContentType} />)}>
                    Home
                </li>

                <li className="text-stone-50 p-4 hover:bg-gray-600 hover:rounded-3xl"
                    onClick={() => handleSetContentType(<Form />)}>
                    Add Customer
                </li>

            </SidebarList>
        </nav>
    );
}