/**
 * @description
 * return headers
 *
 * @returns {{Accept: string, Content-Type: string}}
 */
function configureHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    };
}


/**
 * @description
 * Configure api hostname for different environments
 *
 * @returns {string}
 */
function configureHostname() {
    return 'https://whatech-customerbets.azurewebsites.net/api';
    // return 'http://localhost:5050/mocks';
}

module.exports =  {
    configureHostname: configureHostname,
    configureHeaders: configureHeaders
};
