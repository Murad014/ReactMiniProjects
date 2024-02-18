import SimpleTable from "./tables/SimpleTable";
import Input from "./form/Input";
import Button from "./form/Button";
import {useRef, useState} from "react";
import {calcPaymentResult} from "../utils/CalculateUtil";

export default function CustomerPaymentList({paymentList}){
    const paymentRef = useRef();
    const descRef = useRef();
    const [refresh, setRefresh] = useState(true);
    const result = calcPaymentResult(paymentList);


    paymentList.map(
        (payment, index) => {
            payment.id =  index + 1;
        }
    );

    const columns = [
        {header: "№", accessor: "id"},
        {header: "Description", accessor: "paymentDescription"},
        {header: "Amount", accessor: "paymentAmount"},
        {header: "Date", accessor: "paymentDate"},
    ];


    function addBtnClick(){
        const paymentAmount = paymentRef.current.value;
        const description = descRef.current.value;

        paymentList.push(
            {
                paymentDescription: description,
                paymentAmount: paymentAmount,
                paymentDate: new Date().toISOString()
            }
        );

        setRefresh((prev) => !prev);
    }
    const resultClass = calcPaymentResult(paymentList) >= 0 ? "mx-2 text-red-600" : "mx-2 text-green-600";
    return (
        <>
            <div
                className="text-xl shadow-xl mx-auto mt-24 h-fit relative sm:rounded-lg p-2 overflow-x-auto overflow-y-auto">

                <div>
                    <Input label="Amount: " ref={paymentRef} style={{width: 180}}/>
                    <Input label="Desc: " ref={descRef} />
                    <span className={resultClass}>Result: {result}</span>
                    <Button handleAction={addBtnClick} >Add</Button>
                </div>

                <div className="">
                    {paymentList.length === 0 ?
                        <span className="text-red-600">There is not item yet. Add payment.</span> :
                        <SimpleTable columns={columns} data={paymentList}/>}

                </div>
            </div>
        </>
    );

}