export const validate = values => {
    const errors = {}

    if(!values.firstName) {
        errors.firstName = 'Required First Name!'
    } else if (values.firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less!'
    }

    if(!values.lastName) {
        errors.lastName = 'Required Last Name!'
    } else if (values.lastName.length > 20){
        errors.lastName = 'Must be 20 characters or less!'
    }

    if(!values.email) {
        errors.email = 'Required Email!'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email Address!'
    }

    return errors
}