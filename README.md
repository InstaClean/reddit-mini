# JPGs of Reddit (miniature Reddit UI)

This is a web app that mimicks some of the features of Reddit, allowing users to view top posts on a select list of media-centric subreddits. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This app allows works mainly through the use of the undocumented reddit JSON API. Simply put, a user can get data from any reddit page in JSON format by appending any reddit URL with ".json". 

-- For Example: [r/pics in JSON format](https://www.reddit.com/r/pics.json)

Using a Redux Async Thunk as middleware, we can get the data from the subreddit and have posts presented to the user.

### Links

- Live Site URL: [GitHub Pages](https://instaclean.github.io/reddit-mini/)

## My process

### Built with

- HTML5
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS Preprocessor
- [Redux Toolkit](https://redux-toolkit.js.org/) -- Global State Management 
- [TypeScript](https://www.typescriptlang.org/) -- Type Safety

### What I learned

This was the first time I made a redux store on a personal project. Although maybe not necessary for an app on such a small scale as this one is. Making this app with redux boosted my confidence in working within the framework. It is complicated, but I am glad I recieved some useful experience making a useful app with it.  This was also by first project implemented with typescript. I used it mostly with my Middleware and API and it really did make development much simpler.


### Continued development

Will work to make the site fully responsive, only appears friendly for desktop screens.

