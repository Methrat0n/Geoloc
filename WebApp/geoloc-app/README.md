##Web App implementation

###Libraries:

To devellop this webApp we've use [NodeJs](https://nodejs.org/en/) as server, [React](https://facebook.github.io/react/) as view handler, the first version of the project was created using [create-react-app](https://github.com/facebookincubator/create-react-app), and the rendering is do using [google-map API V3](https://developers.google.com/maps/?hl=fr) over [react-google-map](https://github.com/istarkov/google-map-react) and [Polymer](https://www.polymer-project.org/1.0/).

###Model :
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

To use this featured in Chrome we need to activate the HTTPS, so to do so in express :
~~~bash
HTTPS=true npm start
~~~
That's only for dev purpose, on production-ish server a reverse proxy should be use.

###Components :
####The Map component

The Map component use [react-google-map](https://github.com/istarkov/google-map-react) to provide us with a simpler implementation of google maps in react.

The Component itself extends *PureComponent* instead of *Component* to make sure the render method is a pure one, that evoid a lot of trouble with map.

The logic in the class is simple : we use Geolocalisation to know where we are and then we launch the map center in that point with a zoom that we estime a good one.

The only important thing to note here is there is a misunderstading between react and map, so it's quite difficulte to get it to work. If you use our code, the only remaining problem is that the map need an **height** style attribute, and it need that all its parents have an height too.

To ease that, we have write a simple style object that you use like this :
~~~EC6
import style from './style';
...
<div style={style}>... <div>
~~~