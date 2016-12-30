;TL DR

~~~bash
git clone repo
cd repo/WebApp
docker build -t testName .
docker run -v $PWD/geoloc-app:/home/geoloc/geoloc-app -p 8000:80 testName
~~~

Then go to localhost:8000 in a browser

###Installation

To launch the web application, begin by cloning that repo.
You can then go to this same directory and do
~~~bash
docker build -t someName .
~~~

Docker will create an image of the dockerfile and prepare all we need.
When this is finish you can run the newly created image by doing

~~~bash
docker run -v $PWD/geoloc-app:/home/geoloc/geoloc-app -p 8000:80 SomeName
~~~

It will take time, downloading all the dependancies, and then will finish. To do that, you obvisouly need [Docker](https://docs.docker.com/engine/installation/linux/ubuntulinux/) as up-to-date as possible.

Then go to localhost:8000 in a browser, and begin to devellop in the *geoloc-app* directory.

###Architecture :

The *public* directory contain the view of the application and the *src* directory contain the code.
Under this same *src* you should place a *\__test__* directory that contain files name as follow : *nameClass.test.js*

For more please read the README in the project directory

###Best pratice :
Unless you realy need it, the docker-compose file in the root directory should work out of the box. Be sure to know what your doing.

