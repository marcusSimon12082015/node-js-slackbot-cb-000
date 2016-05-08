Slackbot Lab
============

## Overview

In this lab, we will implement a chat bot slash command for the popular team communication tool Slack.

## Introduction

So here's the scenario: In our daily work as programmers, we find that we frequently want to grab information about other coders from github. What if we could just ask for a github user's basic info directly in a slack chat?

Well, we can! Slack makes available an "integration" called "slash commands" that allow ust to achieve this. So this is what you'll be implementing in this lab, and to do so you'll need to pull together all the tools you've learned about Node servers, asynchrony and Promises that you've learned in this lab.

## Getting Setup

In order to get started here, you'll need to install the necessary modules. As before, we've included some tests that specify the required modules. Install those now.

Now that we've setup the node modules, another big config step we need to do here is getting Slack itself setup to ... 


## Express.js

You may have noticed while installing the Node Modules that we are using a new module: **express**. [Express](http://expressjs.com/) is a popular module that assists us in designing and building Node web servers. Essentially, it provides a very thin layer on top of the basic node web server methods with which you are familiar that can make implementing a server much easier.

The basic syntax for setting up routes that you are familiar with from the [Basic Web Server Lab](https://github.com/learn-co-curriculum/node-js-basic-web-server) are the same in Express. It's also helpful to use Express because the community of programmers using Express to build servers is gigantic. So as we work on this lab, we'll find that our google results are bountiful as we search for answers. And there is always the Express [documentation](http://expressjs.com/en/4x/api.html).

## The Task

Okay, so that's enough prep. Here's the specification that you need to meet:

1. The slash command you build should be able to look up a user using the [Github API](https://developer.github.com/v3/) when supplied with a username, like so: `/<yourcommand> flatiron-school`.
2. The answer supplied to the Slack channel should provide some basic "default" information about the user. We'll leave the definition of what consitutes "default" information up to you. But the repsonse should be nicely formatted using Slack's [Message Formatting](https://api.slack.com/docs/formatting), and should at the very least include the username and their github profile link.
3. In addition, to providing the user name, the user should also be able to specify an explicit piece of information that they would like to retrieve from the list that is generally supplied, which you can see [here](https://api.github.com/users/flatiron-school). E.g. `/<yourcommand> flatiron-school type` shoudl return a nicely formatted message informing the user that the flatiron-school is of the type `Organization`.
4. Finally, if there is some sort of error, your slash command server, should "fail gracefully", providing a message to the user that something went wrong, and encouraging them to try again!

Good luck, and enjoy!

## Resources

* Slack Slash Command Documentation: https://api.slack.com/slash-commands
