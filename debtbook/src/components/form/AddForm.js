import Home from "../Home";
import Input from "./Input";
import Button from "./Button";
import HeaderCard from "./HeaderCard";
import {useRef, useState} from "react";
import {validateCustomerForm} from "../../utils/ValidaUtil";

export default function AddForm({title, handleSetContentType, customers, ...props}){

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const [validForm, setValidForm] = useState(true);


    function saveButtonClick(){
        if(!validateCustomerForm(firstNameRef, lastNameRef, emailRef, phoneRef)) {
            setValidForm(false);
            return;
        }
        const newCustomer = {
            name: firstNameRef.current.value,
            surname: lastNameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            paymentList: [ ]
        };
        customers.push(newCustomer);
        goHomePage();
    }


    function cancelButtonClick(){
        goHomePage();
    }

    function goHomePage(){
        handleSetContentType(<Home handleSetContentType={handleSetContentType} customers={customers}/>);
    }

    return (
        <div className="text-xl m-auto shadow-xl">
            <div className="p-5 flex flex-col">

                <HeaderCard cardName={title} />

                <Input ref={firstNameRef} label="First name"/>
                <Input ref={lastNameRef} label="Last name" />
                <Input ref={emailRef} label="Email" />
                <Input ref={phoneRef} label="Phone" />

                {validForm ? null :
                    <div className="text-red-600">
                        <span>Fill every input please.</span>
                    </div>
                }

                <div className="flex flex-row mt-4">
                    <Button handleAction={saveButtonClick}>
                    Save
                    </Button>
                    <Button handleAction={cancelButtonClick}>
                        Cancel
                    </Button>
                </div>


            </div>
        </div>
    );
}

function createNewCustomer(firstName, lastName, email, phone){
    return
}