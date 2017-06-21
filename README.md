# FilmPalette

##This project is for the Urban Outfitters Code Challenge.  Film Palette is an app that allows a user to search for movies by title and to find the color palette for the movie's poster. Built with React, Webpack, and Express. On the initial load the user is prompted to enter a movie title. Once a title is submitted an request is made to the OMBD API. When the response is received the movie's poster and meta data are rendered and a second request is made to the ColorTag API to process the image. The ColorTag API then responds with json data containing up to 20 color objects with HEX and named labels. This was a great challenge and I learned a lot about pure React and XMLHTTPRequests. Some issues I ran into were with preflight options responses and dealing with a spotty API (ColorTag was a little finicky)



## Installation

**1. Clone the repo**

    git clone https://github.com/dkinsk/film-palette.git

**2. Run install script**

Run `npm install` from root directory of the project to install.


## Server

Run `npm start` to start server.


## Run build

Run `npm build` for standard build.

Run `npm run build-dev` for quicker compile and live reload for development purpose.


## Main Technologies Used

## API

* http://apicloud.me/apis/colortag/docs/

* http://www.omdbapi.com/

### Backend
* [Express](http://expressjs.com) Express JavaScript Server-Side Framework

### Frontend
* [React](https://facebook.github.io/react/) React JavaScript Client-Side MVC Framework
* [Webpack](https://webpack.github.io/) Webpack Module Bundler for Compiling Application
* [Sass](http://sass-lang.com/) CSS extension language


