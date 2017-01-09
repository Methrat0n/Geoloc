Project Phases :

1 - Definition of the architecture of the project
2 - Creation of the micro-service architecture
3 - Installation of the library and tools
4 - Web UI
5 - Conception and Implementation of the Database
6 - Android's UI
7 - Sound Analysis on Android
8 - Android and Web connection to the Database
9 - Fingerprinting the sound
10 - Render Informations on UI
11 - Add parameter's to the UI
12 - Fonctionnal Tests


**1 - Definition of the architecture of the project**

A first visual can be found in the diagram just aside this file. It desribe the most important piece of software and the interractions among them.

**2 - Creation of the micro-service architecture**

We use a micro-service architecture to allow our applications to work together. First we do this to ease the deployment of the applications, no need for parameter's or anythig like that. We also want our application, especialy the database, to be easily scalable and portable. All that can be achieve with container.

That approch allow us not to care about the depencies of each part of the application, their separate, and also to be easy to use in different computer.

**3 - Installation of the library and tools**

For our devellopement, we will use NodeJS as web-application back-end, Nginx as our web-server and, if needed, as our reverse-proxy. We also will use RethinkDB as our stockage database and Android for the app.

In NodeJs we'll add *react* and *polymer* to handle the web UI, and the driver for RethinkDB, and the *thinky.io* ORM to handle security and ease the devellopement.

For the application to be easier to start, we'll make a script create all the necessary database, table and stuff in RethinkDB. We'll use *recli* to do so.

For the app, we'll add *DroidParts* to handle the REST and ease other parts of the devellopement.

**4 - Web UI**

As said, this UI is build on *react* and *polymer*. The design is yet to come but it should be a simple page with a all parameters and a simple map render at the center. A google map like design.

**5 - Conception and Implementation of the Database**

The database using the RethinkDB tech, it will accept any incoming data respecting it REST format. That's actualy very cool for testing but it's also a security risk. To handle that, we use the virtual network provide by our container engine to isolate the database from the outside.

The conception of the base is it to come, and it's implementation too. But it should use the *recli* tool and the RethinkDB specific language query.

**6 - Android's UI**

The android UI will likely be the map only in full screen and the parameters out of the screen, left or right is yet to decide.

**7 - Sound Analysis on Android**

The sound analysis is the core of the project and must be do and handle with the more serious possible.
It is important that the other parts are finish or will be finish soon when the sound analysis began. If this is respected, we will be able to test our analysis and then will dismiss a lot of errors.

As far as it let us, we need to search for already do library to minimize our job, and so, our errors.

**8 - Android and Web connection to the Database**

When analysis is done, we can now send and retreive data to the database. It is not important that this part is done after the analysis but it provide an easy way to test with real data and so minimize the time we spend in it.

We do NOT send the sound itself to the database. It would use a lot of network for nothing. We do send the metadata of the sound to the database and stock it for further use.

All informations can theoretically but retrieve but that's a bad pratice to expose all of it. So we should create users for our use cases so that we only allow the accesses that we need.

**9 - Fingerprinting the sound**

When we have some sound in the database we will need to know wich one correspond to the same vehicules.
To do so, we need to map a set of metadata of a sound to a kow vehicules.

**10 - Render Informations on UI**

The two UI should be then be able to render the vehicules and the journey of each of this vehicules over time base on the fingerprinting of the vehicules.

We can render that using point, maybe of differents colors, for the vehicules and lines for their journeys, of the same colors of course.

**11 - Add parameter's to the UI**

The design specify a part of the screen, or of the out-screen, is reserved to the parameters but no parameters is discuss, yet.

The parameters will be hold in the client device, not in the server side, so not in rethinkDB. This part of the architecture assume that the user of the web application is not important and that it can change it preferences. This is not the case of the app user, as the parameters are still keep in the client phone but with no timeout.
This angle is logical as a web-application is more design to be use in a desktop mode and a desktop is shared by multiple users. At the opposite, a phone is personnal and the user will likely not change so it make sens to keep his preferences in memory.

**12 - Fonctionnal Tests**

This part is still in construction, but as any other application this one need to pass fonctionnal to certify that it act as we want and only as we want.