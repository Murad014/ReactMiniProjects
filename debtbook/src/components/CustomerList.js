import SimpleTable from "./tables/SimpleTable";
import UpdateForm from "./form/UpdateForm";
import {useContext, useRef} from "react";
import YesOrNoModalbox from "./modalbox/YerOrNoModalbox";
import CustomerPaymentList from "./CustomerPaymentList";
import {AppData} from "../data/AppData";


export default function CustomerList(){
    const {customersData, setContentType} = useContext(AppData);

    const refModal = useRef();
    let removeSelectedId = null;
    function clickEdit(customerId){
        const updateForm =
            <UpdateForm customer={customersData[customerId]}/>
        setContentType(updateForm);
    }

    function removeCustomer(customerId){
        customersData.splice(customerId, 1);
        closeShowModal();
        setContentType(<CustomerList />);
    }

    function openShowModal(customerId){
        removeSelectedId = customerId;
        refModal.current.open();
    }

    function closeShowModal(){
        refModal.current.close();
    }

    function openPaymentList(customerId){
        const paymentList = <CustomerPaymentList paymentList={customersData[customerId].paymentList} />
        setContentType(paymentList);
    }



    customersData.map(
        (customer, index) => {
            customer.id =  index + 1;
            customer.action=
                <>
                    <a href="#"
                       className="p-2 text-blue-600 font-semibold"
                       onClick={() => clickEdit(index)}
                        >Edit</a>

                    <a href="#"
                       className="p-2 text-green-600 font-semibold"
                       onClick={() => openPaymentList(index)}
                    >P. List</a>

                    <a href="#"
                       className="p-2 text-red-600 font-semibold"
                       onClick={() => openShowModal(index)}
                    >Remove</a>
                </>
        }
    );

    const columns = [
        {header: "№", accessor: "id"},
        {header: "Name", accessor: "name"},
        {header: "Surname", accessor: "surname"},
        {header: "Email", accessor: "email"},
        {header: "Phone", accessor: "phone"},
        {header: "Action", accessor: "action"},
    ];

    return(
        <>
            <YesOrNoModalbox ref={refModal} yesClickHandler={() => removeCustomer(removeSelectedId)}
                             noClickHandler={closeShowModal} />

            <div className="text-xl shadow-xl mx-auto mt-24 h-fit relative sm:rounded-lg p-2 overflow-x-auto overflow-y-auto">
                <div className="">
                    {customersData.length === 0 ?
                        <span className="text-red-600">There is not item yet. Add customer.</span> :
                        <SimpleTable columns={columns} data={customersData}/>}

                </div>
            </div>
        </>
    );

}