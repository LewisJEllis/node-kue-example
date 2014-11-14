node-kue-example
================

Simple Dockerized example of Node + Express + Kue, providing a task-invoking endpoint for multiple types of tasks.

## How to run everything:

Install Docker according to [these instructions](https://docs.docker.com/installation/mac/) and make sure you can do:

    $ boot2docker init
    $ boot2docker start
    $ $(boot2docker shellinit)
    $ boot2docker ip

Install fig:

    $ pip install -U fig

Run it:

    $ cd node-kue-example
    $ fig up

Running `boot2docker ip` probably gave you 192.168.59.103, so check out to [http://192.168.59.103:3000/submit](http://192.168.59.103:3000/submit). If it gave you a different IP, use that one instead.
