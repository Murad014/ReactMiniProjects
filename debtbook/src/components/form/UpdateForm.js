import Home from "../Home";
import Input from "./Input";
import Button from "./Button";
import HeaderCard from "./HeaderCard";
import {useContext, useRef, useState} from "react";
import {validateCustomerForm} from "../../utils/ValidaUtil";
import {AppData} from "../../data/AppData";

export default function UpdateForm({title, customer, ...props}){
    const {setContentType} = useContext(AppData);

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
        setContentType(<Home />);
    }

    return (
        <div className="text-xl m-auto shadow-xl">
            <div className="p-5 flex flex-col">

                <HeaderCard cardName={title} />

                <Input ref={firstNameRef} label="First name" defaultValue={customer.name !== "" ? customer.name : null} />
                <Input ref={lastNameRef} label="Last name" defaultValue={customer.surname !== "" ? customer.surname : null}/>
                <Input ref={emailRef} label="Email" defaultValue={customer.email !== "" ? customer.email : null}/>
                <Input ref={phoneRef} label="Phone" defaultValue={customer.phone !== "" ? customer.phone : null}/>

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
