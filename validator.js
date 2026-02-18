// validator.js

function validateEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    if (email.length === 0) {
        return false;
    }

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

module.exports = { validateEmail };