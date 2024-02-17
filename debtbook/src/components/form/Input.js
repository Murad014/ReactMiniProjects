import {forwardRef} from "react";


const Input = forwardRef(function Input({label, ...props}, ref){
    const classLabel = "text-xl";
    const inputClass = "border-2 p-1 text-lg w-96 mb-5";
    return (
        <>
            <label className={classLabel}>{label}</label>
            <input ref={ref} type="text" className={inputClass} {...props}/>
        </>
    );
});

export default Input;