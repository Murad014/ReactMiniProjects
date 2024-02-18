
export function calcPaymentResult(paymentList){
    let calcRes = 0;

    paymentList.forEach(item => calcRes += +item.paymentAmount);
    return calcRes;
}


