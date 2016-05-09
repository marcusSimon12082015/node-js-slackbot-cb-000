Slackbot Lab
============

## Overview

In this lab, we will implement a chat bot slash command for the popular team communication tool Slack.

## Introduction

So here's the scenario: In our daily work as programmers, we find that we frequently want to grab information about other coders from github. What if we could just ask for a github user's basic info directly in a slack chat?

Well, we can! Slack makes available an "integration" called "slash commands" that allow ust to achieve this. So this is what you'll be implementing in this lab, and to do so you'll need to pull together all the tools you've learned about Node servers, asynchrony and Promises that you've learned in this lab.

## Getting Setup

In order to get started here, you'll need to install the necessary modules. As before, we've included some tests that specify the required modules. Install those now.

### Express.js

You may have noticed while installing the Node Modules that we are using a new module: **express**. [Express](http://expressjs.com/) is a popular module that assists us in designing and building Node web servers. Essentially, it provides a very thin layer on top of the basic node web server methods with which you are familiar that can make implementing a server much easier.

The basic syntax for setting up routes that you are familiar with from the [Basic Web Server Lab](https://github.com/learn-co-curriculum/node-js-basic-web-server) are the same in Express. If you open up the `slack_bot.js` file where you'll build out your Express-based slack bot server, you'll see one basic `GET` route already present. The syntax should be familiar:

```
// Just an example request to get you started..
app.get('/', (req, res) => {
  res.ok();
});
```

One of the other reasons it is helpful to use Express is that the community of programmers using Express to build servers is gigantic. So as we work on this lab, we'll find our google results are bountiful as we search for answers. And there is always the Express [documentation](http://expressjs.com/en/4x/api.html).

Let's move on.

### Make Your Local Server Public with Ngrok

In order for our slash command to work, we'll need to make our server **publicly accessible** in some way. Now, normally you'd do this by deploying a server to some service, like Amazon Web Services or Digital Ocean, but since we are just experimenting here what we'll do is use a tool called [**Ngrok**](http://ngrok.com) to make our local server publicy accessible. 

What Ngrok does is establish a tunnel between a dynamically generated public domain (e.g. https://5fea2c02.ngrok.io) and our local server. That way we can just spin up our server locally, and hen point Slack's slash command configuration to the dynamcially generated ngrok domain as our services "webhook". More about webhooks and the Slack configuraiton in a bit. Let's get Ngrok setup.

In order to setup Ngrok, you'll need to get it on your computer. The easiest way to do this is just to download it from [here](http://ngrok.com/download). Once you've downloaded the zip file that it provides, you'll need to unzip the file, and place it somewhere in your path so that you can execute it on the command line. Once you've done this, you should be able to run `./ngrok --help` and see ngrok instructions.

Now, in order to get this all working, we need to take two steps that we'll do over and over again as we work on this lab. By the way, you should do each of these steps in a different window because you'll want to see output as you write and test:

1. Run our server with a `node run-server.sh` command in our lab directory.
2. Run Ngrok to generate a publicly accessible link (i.e. our webhook) by doing `ngrok http 3000`.

After we've run the ngrok command we should see a window that look like this that contains our dynamically generated webhook link:

![Ngrok Screenshot](http://ezmiller.s3.amazonaws.com/public/images/flatiron-imgs/ngrok.png)

Now, if you go to the link displayed in your Ngrok window, you should see the familiar "Hello, World!". Great, we're almost fully geared up.

### Configure our Slack Slash Command

The last step we need to take is to configure our slash command on Slack itself. Basically what we are doing here is naming our command (what will you call it?), and, also very important, we are registering our webhook with Slack so that it knows which server process to notify when a slash command is executed by a user.

> Note: Webhooks themselves are very interesting! They are used all over the web. Essentially, they are like callbacks for the web. A webhook is just a callback to some web service that occurs when a process has completed on a server. If you want to find out more, you can explore [here](http://www.webhooks.org/).

In order to configure our webhook, go to a slack accont that you use and create a test channel somewhere. Once you've done that, go to the dashboard for building a custom integration. The url for that should be the following: `http://<yourteamname>.slack.com/apps/build/cusotm-integration`. Once there you should see the following:

![Slack Custom Integration Page Screenshot](https://ezmiller.s3.amazonaws.com/public/images/Custom_Integration__CodeCuts_Slack_2016-05-09_09-06-54.png)

From here, click on the "Slash Commands" option. You'll then be presented with a screen where you can choose the name of your command. You can call the command whatever you like. Once you've chosen, your command name proceed. Now you'll be presented with a much longer page with a mixture of useful documentation and final configuration.

![](https://ezmiller.s3.amazonaws.com/public/images/Slash_Commands__CodeCuts_Slack_2016-05-09_09-12-42.png)

The main thing that we MUST do here is to register our Ngrok webhook url. Otherwise, the slash command won't know which server to notify. Keep in mind that everytime you re-run Ngrok it generates a new url, so if we restart Ngrok, we'll need to update our configuration here with the new url. You'll also want to take note of the Validation token because we'll need to implement a mechanism to validate this token for each incoming POST event to our server.

Alrighty. At this point, we should be ready to go.

## The Task

Okay, now that we're done with the prep, here's the specification that you need to meet:

1. Every request that comes into your server must be validated. What does that mean? Well, it means that the token string sent by Slack with each slash command webhook POST request, should match the one in your configuration. So just check that that's the case.

2. The slash command you build should be able to look up a user using the [Github API](https://developer.github.com/v3/) when supplied with a username, like so: `/<yourcommand> flatiron-school`.

3. The answer supplied to the Slack channel should provide some basic "default" information about the user. We'll leave the definition of what consitutes "default" information up to you. But the repsonse should be nicely formatted using Slack's [Message Formatting](https://api.slack.com/docs/formatting), and should at the very least include the username and their github profile link.

4. In addition, to providing the user name, the user should also be able to specify an explicit piece of information that they would like to retrieve from the list that is generally supplied, which you can see [here](https://api.github.com/users/flatiron-school). E.g. `/<yourcommand> flatiron-school type` shoudl return a nicely formatted message informing the user that the flatiron-school is of the type `Organization`.

5. Finally, if there is some sort of error, your slash command server, should "fail gracefully", providing a message to the user that something went wrong, and encouraging them to try again!

As usual, we have supplied tests that are designed to guide you through the process and provide further specifications. And as usual, they are in the `tests` directory. Finally, be sure to you documentation and Google heavily as you seek a solution. Reading docs and engaging with the commuity is, after all, a big part of the job. Below you'll find a list of resources that should be helpful.

Good luck, and enjoy!

## Resources

* Slack Slash Command Documentation: https://api.slack.com/slash-commands.
* Express.Js documentation: http://expressjs.com/en/4x/api.html
* Github API documentation: https://developer.github.com/v3/
