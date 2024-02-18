

export function validateCustomerForm(firstNameRef, lastNameRef, emailRef, phoneRef){
    const firstName = firstNameRef.current.value.trim();

    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();

    return !(firstName === "" || lastName === "" || email === "" || phone === "");
}