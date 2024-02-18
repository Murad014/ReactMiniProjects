import Home from "../Home";
import Input from "./Input";
import Button from "./Button";
import HeaderCard from "./HeaderCard";
import {useRef, useState} from "react";
import {validateCustomerForm} from "../../utils/ValidaUtil";

export default function UpdateForm({title, handleSetContentType, customer, customers, ...props}){

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

        customer.name = firstNameRef.current.value;
        customer.surname = lastNameRef.current.value;
        customer.email = emailRef.current.value;
        customer.phone = phoneRef.current.value;


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

                <Input ref={firstNameRef} label="First name" defaultValue={customer.name !== "" ? customer.name : null} />
                <Input ref={lastNameRef} label="Last name" defaultValue={customer.surname !== "" ? customer.surname : null}/>
                <Input ref={emailRef} label="Email" defaultValue={customer.email !== "" ? customer.name : null}/>
                <Input ref={phoneRef} label="Phone" defaultValue={customer.phone !== "" ? customer.name : null}/>

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
