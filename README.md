# Jennifer Lee's Restaurant Reviews Project - FEND Project #5



## Background
This project is a mock restaurant finder application.  The application has maps from [MapBox](https://www.mapbox.com/) and it has mock restaruant review, hours, etc.



## Goal for this project:
The original repository was provided by [Udacity](https://github.com/udacity/mws-restaurant-stage-1) and the student's main goal is to update/change the code with these areas in mind:
* make the webpages responsive - appropriate for different viewports
* use keys from MapBox
* use service workers which will help make the application work offline
* make it accessiblity friendly



### What do I do from here?
1. You could download this repository by clicking the above button that states, "Clone or Download." You will choose either Download Zip or Open in Desktop. Put the files in one folder.

2. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 4000`. For Python 3.x, you can use `python3 -m http.server 4000`. **For my project, I used port 4000.**  If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:4000` - you will see the index page and how it is responsive in different viewports.  You could also select a restaurant and check the resposiveness there.  

4. You could then test the pages for offline use.  For example, in Chrome, you could press F12 for Dev Tools\Application\Service Workers\select Offline.  Reload the page and you will notice the maps and images are still rendered because the service worker enabled the caching feature for this app.

5. You could also check out the accessibility features for the pages by checking the order of the tabs and also note some aria-labels that describe features for non-visible use.



### Acknoledgements and Resources:
* [Aria techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Aria/aria_Techniques)

* [Matthew Cranford - Restaurant Review Apps Walkthrough](https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/)

* [Alexandro Perez MWS Restaurant Review walkthrough webinar](https://alexandroperez.github.io/mws-walkthrough/?1.1.introduction)

* Concepts on [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

* Concepts on [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

* Concepts on [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

* [leafletjs](https://leafletjs.com/)

* [Mapbox](https://www.mapbox.com/)

* [Python](https://www.python.org/)

* [Udacity - Restaurant Reviews Apps repository](https://github.com/udacity/mws-restaurant-stage-1)

* Project Rubric from Udacity

* [Emoji cheat sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/) for Markdown files

* Udacity's Front End Nanodegree [Style Guides](https://github.com/udacity/frontend-nanodegree-styleguide)


### Further Comments:
This project helped me understand the role of service workers and caching better - definitely interesting especially if you want to make your app available offline. :simple_smile:


This project was built on lots of reading and drinking copious amounts of coffee. :coffee: Copyright © 2018 Jennifer Lee

