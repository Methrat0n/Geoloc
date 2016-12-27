# Geoloc
This project intend to provide a way to follow and track non-homologate vehicules 

### Install :

#### web :

Just clone that repo then :
~~~bash
docker-compose up
~~~

It will bring to life the needed database and start the web server. For more details on each one look in their respective directories.

Obviously you need to have [Docker](https://docs.docker.com/engine/installation/linux/ubuntulinux/) and [Docker-Compose](https://docs.docker.com/compose/install/) install and runnig in you machine, as up-to-date as possible.

#### android:

Clone the repo and go to the AndroidApp directory.
~~~todo
TODO : Define how to install the android app
~~~

### Tech :

####front :
The front server is nginx, it receive request and pass them to the request service. This help us in case of server load that was not expected. It capacity to receive multiple request at the same time without using much ressource is also appreciate.

####web :

The web interface use React and Polymer, base on NodeJS. It's a very small and simple interface, so there should be no problem if you want to modify it. The documentation and commentaries should help you.

#### Database :

The database is construct using the RethinkDB SGBD. They provide REST query and easy to use client side drivers.
More informations about the structure of the database can be found in it's directory, or in the documentation.

#### Android :

The android App use DroidParts as framework, it provide REST functionalities that ease the devellopement of a link with database.

##Dev :

Each task should be done in a separate branch, do not hesitate to create branch if you think it's necessary. When you're done, ask someone to review your work then, if it pass, ask me to merge your branch in master.

NEVER DO THAT YOURSELF

## Vocabulary :
Traitement : Extract information from the sound flux.
Analyse : make decision from the data already process.
