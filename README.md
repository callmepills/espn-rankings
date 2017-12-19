# espn-rankings

An Express application that scrapes the rankings available from [ESPN](http://www.espn.com/), parses them, and responds with a more consumable JSON format.

## Resources

#### GET /football/{season}/{week}/{position}

Gets the ESPN football rankings for a given season, week, and position. The `position` can be one of **qb**, **rb**, **wr**, **te**, or **dst**. An array of rankings is returned with the following schema:

```js
[
  {
    "overall": "string",
    "opp": "string",
    "berry": "number",
    "karabell": "string",
    "yates": "string",
    "cockroft": "string",
    "avg": "string",
    "name": "string",
    "team": "string"
  },
  // ...
]
```

## Getting started

#### Prerequisites

* Git v2.14.1 or better
* Node.js v6.11.4 or better
* WebStorm or Visual Studio Code

#### Setup local workspace

First, clone the repository to your working copy.

```
git clone https://github.com/callmepills/espn-rankings.git
```

Then, navigate to the new directory and install the required Node.js dependencies.

```
cd espn-rankings
npm install
```

#### Start web server

Start the application.

```
npm start
```

Once started, the API is available at <http://localhost:8090>.

## Contributing

Issues, pull requests and questions are welcomed.
