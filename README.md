# dede-display

monitoring data from GTFS feed

## Table of Contents
0. [General](#General)
1. [Quick Start Guide](#Quick-Start-Guide)
2. [Setup](doc/setup.md)

# General

This repository provides a service for
[GNU/Linux](https://www.gnu.org/gnu/linux-and-gnu.en.html)
operating system.
As a front end service,
it interacts with this
[API](https://github.com/Software-Ingenieur-Begerad/postgres-gtfs-rest-api).

# Quick Start Guide

## Preparation

* check out project on a GNU/Linux development system and change into the project root folder
```
git clone git@github.com:Software-Ingenieur-Begerad/gtfs-display.git
```

* run the following instruction to install dependenies
```
npm i
```

## Development setup

* run the following instruction to start the service in development mode
```
npm run start

```

## Production deployment

* run the following instruction to build the service for a production host
```
npm run build
```
