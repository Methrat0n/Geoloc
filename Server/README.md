## Database with postgreSQL

This directory contain the definition of the database and her creation. By this, I mean that the dockerfile actualy in this directory create the database service, you can try it by doing :

~~~bash
docker build . -t db
docker run db -p "5432:5432"
~~~

The creation itself of the database is done be executing the create_db.sh in the dockerfile. So, when tou actualy run the container, the database should be create as you defined it.

The data are stored in the container's directory named data, it's a volume so the data remains between to run. You can mount it as well to access it.

As long as you can do that, the good thing to do is to modifye this file as you need to and then to run the docker-compose.yml file in the top directory.

~~~bash
docker-compose up
~~~

;TLDR do nothing, just use the docker-compose