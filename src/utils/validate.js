export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);   // it will return true or false
    if(!isEmailValid) return "Email is not valid";

    return null;
}

