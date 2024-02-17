import Home from "../Home";
import Input from "./Input";
import Button from "./Button";
import HeaderCard from "./HeaderCard";
import {useRef, useState} from "react";

export default function Form({title, handleSetContentType, ...props}){

    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const phone = useRef();

    function saveButtonClick(){

    }

    function cancelButtonClick(){


    }

    return (
        <div className="text-xl m-auto shadow-xl">
            <div className="p-5 flex flex-col">

                <HeaderCard cardName={title} />

                <Input ref={firstName} label="First name"/>
                <Input ref={lastName} label="Last name" />
                <Input ref={email} label="Email" />
                <Input ref={phone} label="Phone" />

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