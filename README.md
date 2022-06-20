# GTFS-Display

monitoring data from GTFS feed

## Table of Contents
0. [General](#General)
1. [Quick Start Guide](#Quick-Start-Guide)
2. [Setup](doc/setup.md)
3. [Next Steps](#next-steps)

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

# Next Steps

* Which agency has already delivered data?\
How long is the delivered data valid?
* Show 1/2/3/4 weeks in the past, present and future how many trips of agencies are available or valid!\
Does the number of trips change significantly? Is it a gap in data delivery?
* Subpages or pages should not need to do a full reload of data for UI interaction or pages or subpages switches!
