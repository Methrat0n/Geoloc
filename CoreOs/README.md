####CoreOS configuration and Installation

; TLDR
~~~bash
wget https://raw.githubusercontent.com/coreos/init/master/bin/coreos-install
chmod +x coreos-install
sudo ./coreos-install -d /dev/sda -C stable -c cloud-config.yml
~~~
####CoreOs

[CoreOs](https://coreos.com/) is a minimal linux Distrib base on [Gentoo](https://www.gentoo.org/). Her only goal is to provide a secure environnement to run containers.

The OS only contains minimal executables and no package manager, and you should not try to install one. Part of the security CoreOs provide come from the fact that no unused or unmastered programm is installed. By doing so, we show no weaknesses to an attaquant.

####Installation

To install CoreOs we need to boot in our new server with a live boot. Choose the one that please you, it does'nt matter.
When you're in, use the console to install git, and clone that repo, then come to this very directory.

We'll need the installation script that CoreOs use to install himself in a server :
~~~bash
wget https://raw.githubusercontent.com/coreos/init/master/bin/coreos-install
chmod +x coreos-install
~~~

As you see it's a shell script, you can read it if you're crazy.
What we want is to install CoreOs in our server, so peek the disk you want to use. You can find it in */dev*, but most of the time it's *sda*.
After that, you can choose the version you want to use, we'll go with the stable version, but [feel free to change](https://coreos.com/os/docs/latest/installing-to-disk.html#stable-create).
Finaly, choose a config file that specify all you configurations. The documentation to create yours is [here](https://coreos.com/os/docs/latest/cloud-config.html).

So, now that your ready :
~~~bash
sudo ./coreos-install -d /dev/sda -C stable -c cloud-config.yml
~~~

Of course instead of recreating all that you can, and should, use our files.

####Help :

#####Server restarting :

CoreOs restart itself each time a new version is available. That garantee your security as you do not need to apply any patch to your server. But that also mean that you need to restart your container with the server automaticly. That can be done in the config file or in rc.local.

If you want your service to be always up you can use a [cluster](https://coreos.com/os/docs/latest/cluster-architectures.html)

#####No APT ? But I need to do things

Yes, and coreOs care about you. Just use the [toolbox](https://coreos.com/os/docs/latest/install-debugging-tools.html) that's package with it but be careful.

#####Great, but how do I start the server without docker-compose installed ?

Easy one, just use a container containing docker-compose. Their is one in this very same directory.
~~~bash
docker build -t compose .
cd ..
docker run -d -v $PWD:/app -v /var/run/docker.sock:/var/run/docker.sock compose
~~~
 
 We share the project directory to allow access to the docker-compose.yml file and all the other.
 You may wonder what the second volume does, that's where the magic happen. In fact, we  share the docker's socket, so that from docker's point of view, the creation of the containers, inside the compose container, seems to happend in the host environnement.
