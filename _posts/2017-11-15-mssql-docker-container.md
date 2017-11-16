---
layout: post
title: Running MS SQL Server locally with test data using Docker
date: 2017-11-15
author: j.deflaux
categories: docker container mssql automation
description: Running MS SQL Server in a Docker Container that will load local sql file and data from csv
---

When developing locally on my machine I like to have a dev database that I can play with (=wipe out) with no impact to anyone, and optionally load test data into it.

The purpose of this post is to show how we can use Docker to launch a local instance of Ms SQL server that will ingest local SQL script and tables data from csv files.

By extension it can be used for e2e testing as your database will have an expected state before running your tests, and will run in a container.

That's quite handy for API testing!

* * *

# What is happening?

The command ```docker-compose up``` launches locally (on windows or mac) the docker image  `microsoft/mssql-server-linux` and will excecute the queries in ```/table/*.sql``` , and import the data for each table in ```/data/*.csv``` 

Once started the databse is accessible at ```0.0.0.0:1433``` for local development, or even for integration/end to end tests.

* * * 

## Code organisation

{% highlight bash %}
src/
├── sql/
│   ├── data/
│   │   ├── MyTable.csv
│   ├── table/
│   │   ├── MyTable.sql
│   ├── entrypoint.sh
│   ├── init.sql
├── docker-compose.yml
{% endhighlight %}

- ```docker-compose.yml``` launch ```sqlserver``` AND ```entrypoint.sh```.
- ```entrypoint.sh``` wait for sql server to start and then:
  - launch ```init.sql``` to drop and create the database
  - excecute all the sql files in ```/table```
  - import all the csv in ```/data``` (filename = table name)

## docker-compose.yml
{% highlight yml %}
version: '2.1'
services:

  mssqldata:
    image: microsoft/mssql-server-linux:latest
    entrypoint: /bin/bash

  mssql:
    image: microsoft/mssql-server-linux:latest
    ports:
      - 1433:1433
    volumes:
      - /var/opt/mssql
      # we copy our scripts onto the container
      - ./sql:/usr/src/app 
    # bash will be executed from that path, our scripts folder
    working_dir: /usr/src/app 
    # run the entrypoint.sh that will import the data AND sqlserver
    command: sh -c ' chmod +x ./entrypoint.sh; ./entrypoint.sh & /opt/mssql/bin/sqlservr;'
    environment:
      ACCEPT_EULA: Y
      SA_PASSWORD: P@55w0rd
    # don't use this if you don't want to persit data between docker up and down
    volumes_from:
      - mssqldata
{% endhighlight %}

## entrypoint.sh
{% highlight bash %}
#!/bin/bash
database=Prime
wait_time=15s
password=P@55w0rd

# wait for SQL Server to come up
echo importing data will start in $wait_time...
sleep $wait_time
echo importing data...

# run the init script to create the DB and the tables in /table
/opt/mssql-tools/bin/sqlcmd -S 0.0.0.0 -U sa -P $password -i ./init.sql

for entry in "table/*.sql"
do
  echo executing $entry
  /opt/mssql-tools/bin/sqlcmd -S 0.0.0.0 -U sa -P $password -i $entry
done

#import the data from the csv files
for entry in "data/*.csv"
do
  # i.e: transform /data/MyTable.csv to MyTable
  shortname=$(echo $entry | cut -f 1 -d '.' | cut -f 2 -d '/')
  tableName=$database.dbo.$shortname
  echo importing $tableName from $entry
  /opt/mssql-tools/bin/bcp $tableName in $entry -c -t',' -F 2 -S 0.0.0.0 -U sa -P $password
done

{% endhighlight %}


## init.sql
{% highlight sql %}
DROP DATABASE Prime

CREATE DATABASE Prime;
GO
{% endhighlight %}


## MyTable.sql
{% highlight sql %}
USE Prime;
GO

CREATE TABLE MyTable(
  Id nvarchar(max),
  Value nvarchar(max)
);
GO
{% endhighlight %}

## MyTable.csv
{% highlight csv %}
id,value
1,yes
2,it works:)
{% endhighlight %}
