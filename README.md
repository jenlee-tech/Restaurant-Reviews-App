# Jennifer Lee's Restaurant Reviews Project - FEND Project #5
---
## Background
This project is mock restaurant finder application.  The application has maps from [MapBox](https://www.mapbox.com/) and it has mock restaruant review, hours, etc.

## Goals for this project:
The original repository was provided by Udacity and the student's main goal is to update/change the code with these areas in mind:
    * make the webpages responsive - appropriate for different viewports
    * use keys from MapBox
    * use service workers which will help make the application work offline
    * make it accessiblity friendly

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 


### Acknoledgements and Resources:
* [Aria techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Aria/aria_Techniques)

* [Matthew Cranford - Restaurant Review Apps Walkthrough](https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/)

* [Alexandro Perez MWS Restaurant Review walkthrough webinar](https://alexandroperez.github.io/mws-walkthrough/?1.1.introduction)

* [leafletjs](https://leafletjs.com/)

* [Mapbox](https://www.mapbox.com/)

* [Python](https://www.python.org/)



