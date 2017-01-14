##Web App implementation

####The geolocalisation class

This class is aimed to ease the use of the geolocalisation feature of HTML5. You can read it if you want be it's quite simple realy.

The class must be import this way :

~~~EC6
import location from './API/Geolocalisation';
~~~

Off course change the path as needed.

Important things to know about this class is that it will only work in a browser, not alone. The browser respond to the request, but it take time. So to handle that asynchrone part, we use [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Because of that, here is a typicall example of how to use the class :


~~~EC6
	constructor() {
		super();
		this.state = {
		    latitude: null,
		    longitude: null,
		}
	}
~~~
The constructor Initialise the state without blocking the thread
~~~EC6
componentDidMount() {
        location.latitude.then(latitude => this.setState({latitude: latitude}));
        location.longitude.then(longitude => this.setState({longitude: longitude}));
    }
~~~

Then we launch async affectation. This method is automaticaly launch at the component integration in the shadowDOM

~~~EC6
    render() {
    return (<div>
              latitude = {this.state.latitude}
              longitude = {this.state.longitude}
              </div>
    );
~~~
Finaly, we render our value or do anything with them. If you're quick you may see that the places of the variables are, in the beginning, empty.