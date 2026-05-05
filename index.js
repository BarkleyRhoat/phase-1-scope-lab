var customerName = 'bob';
upperCaseCustomerName = function() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'Assignment to constant variable.';
    leastFavoriteCustomer = 'new value';
}