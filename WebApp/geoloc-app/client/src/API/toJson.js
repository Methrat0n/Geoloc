/**
 * Created by merlin on 23/01/17.
 */
//You should expand this class and send a json version of the
//resulting object as a request to the database
const toJson = function(obj) {
    return JSON.stringify(obj, function(key, value) {
        if (typeof value === 'function')
            return value.toString();
        else
            return value;
    });
}

export default toJson;