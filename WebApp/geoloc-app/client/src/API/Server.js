/**
 * Created by merlin on 23/01/17.
 */

function search(query, onSucess) {
    return fetch(`db/?q=${query}`, {accept: 'application/json',})
           .then(checkStatus)
           .then(parseJSON)
           .then(onSucess);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error); // eslint-disable-line no-console
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

const Server = { search };
export default Server;