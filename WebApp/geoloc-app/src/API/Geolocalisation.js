/**
 * Created by merlin on 14/01/17.
 * Classe base on the HTML5 featured : geolocalisation.
 * Will work on the device we recommend to use with
 * the project.
 *
 * We will need to host our webApp using https so
 * this API will work on chrome.
 */
class Geolocalisation {

    constructor() {
        if (navigator.geolocation)
        {
            this._promisePosition = new Promise(function (resolve) {
                navigator.geolocation.getCurrentPosition(position => resolve(position));
            });
        }
        else
            console.log("Navigator not handling the geolocalisation (on chrome you need to use https)");
    }

    get latitude() {
        return this._promisePosition.then(position => position.coords.latitude);
    }

    get longitude() {
        return this._promisePosition.then(position => position.coords.longitude);
    }
}

let location = new Geolocalisation();
export default location;