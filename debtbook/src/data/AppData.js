import {createContext} from "react";


export const AppData = createContext({
        customersData: [],
        updateCustomer: () => {},
        setContentType: () => {}
    }
);
