# As You Wish

I really like the _The Princess Bride_ and "as you wish" was the first thing that popped into my head when I was thinking about making decisions. While some might think there's a wholesome or romantic reasoning behind it, I'm certain it's because I'm horrible at making decisions and I'll go along with whatever someone decides; so cute, right?

Well, this simple web app does the decision making for you. There is absolutely nothing smart about how the decision is made, one of the choices provided is just chosen at random. But just like Westley, whatever the app says, I will do "as you wish".

Try it out: https://as-you-wish-prod.herokuapp.com/

## Features

Here are all the features currently available in the web app:
- Choose a random activity
- Choose a random movie or TV show
- Choose a random restaurant or recipe
- Choose a random option from your own custom set of options
- Edit possible options

## Technologies

Because this was meant to help me stop wasting so much of my life to indecision, this web app is quite simple. The technologies used include:
- Gatsby
- React
- Plain CSS
- Heroku

The decision making is done by using `Math.random()` :) 

## In Development

There is still much to do, and here are the (tentative) plans moving forward:
- Managing possible activities
    - Maintaining activities across sessions
- Choosing a random movie or TV show
    - Pulling movie and TV show data from video streaming service libraries
    - Filter by genre
    - Filter by length
- Choosing a random restaurant
    - Pulling restaurant data for restaurants open now
    - Filter by distance
    - Filter by cuisine
- Responsive design for mobile users
