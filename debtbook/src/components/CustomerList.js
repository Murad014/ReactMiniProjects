import SimpleTable from "./tables/SimpleTable";
import UpdateForm from "./form/UpdateForm";
import {useRef} from "react";
import YesOrNoModalbox from "./modalbox/YerOrNoModalbox";
import CustomerPaymentList from "./CustomerPaymentList";


export default function CustomerList({customers, handleSetContentType}){
    const refModal = useRef();
    let removeSelectedId = null;
    function clickEdit(customerId){
        const updateForm =
            <UpdateForm title="Update Customer"
                                        handleSetContentType={handleSetContentType}
                                        customer={customers[customerId]}
                                        customers={customers}
            />
        handleSetContentType(updateForm);
    }

    function removeCustomer(customerId){
        customers.splice(customerId, 1);
        closeShowModal();
        handleSetContentType(
            <CustomerList customers={customers} handleSetContentType={handleSetContentType} />
        );
    }

    function openShowModal(customerId){
        removeSelectedId = customerId;
        refModal.current.open();
    }

    function closeShowModal(){
        refModal.current.close();
    }

    function openPaymentList(customerId){
        const paymentList = <CustomerPaymentList paymentList={customers[customerId].paymentList} />
        handleSetContentType(paymentList);
    }



    customers.map(
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
                    {customers.length === 0 ?
                        <span className="text-red-600">There is not item yet. Add customer.</span> :
                        <SimpleTable columns={columns} data={customers}/>}

                </div>
            </div>
        </>
    );

}