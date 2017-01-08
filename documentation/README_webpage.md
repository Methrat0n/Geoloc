##Intro##

Read-me expalining the image provided to explain the desing of the web page.

##Map##

The map part uses existing techonlogy both OpenStreetMap and GoogleMap can work.

It should be chosen when implementation of web site or android app start.

We use markers to display recorded position of an unapproved vehicle (certainly one each 3-5 seconds)
We use itinerary lines to display the itinerary of the car.

Moving and zooming the map is implemented in the API we'll use.

##Top part##

The top part is used to control the time shown on the map.
The desgin is not final, only functionnal.

The default button is used to go to current time and default delay.

A datepicker can be used to choose a past date.
The delay should be set using a range slider (with steps for simpler inputs).

Example of steps:
	- 15/30 seconds
	- 1/2/3/5/10/15 minutes.
(for present time or precise past date)
	
The arrow buttons may be used for choosing the hours.


To simplify to control we should consider limiting the precision of time unit to something bigger than 10 minutes.