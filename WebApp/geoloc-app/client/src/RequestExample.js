/**
 * Created by merlin on 23/01/17.
 */

//Import the server class to enable communication from the client to the server
import Server from './API/Server';

//A request must have an Id, it identifie a request know by the server
const request = {
    id : "anId",
};

//Must be
let json = Json.stringify(request);

//use this function to execute a research in the server side
//You must then pass a callback function which will get a parameter.
//This parameter is the return of the executed request
Server.search(json, (jsonAnswer) => console.log(jsonAnswer) );
