# This Is Not A Startup

We need another way to fund software. All the ways we currently use are
[broken or unscalable](./economics-of-software.md). We need a model that
aligns the interests of the users of the software with it's creators.

So, I present ThisIsNotAStartup!

_ThisIsNotAStartup_ combines the best about agile development,
with crowdfunding, but removes the _platfrom_ part of crowdfunding.
It's a crowdfunding _tool_ not a platform.

It's not a startup because there is no platform.
This is just an open source project for funding open source projects.
Every line of code and resource will be available under a liberal license.
If you want to fund your opensource project, you can run it your self!

## The Problem

Software only needs to be written once. Bugs need to be patched,
but a bug only needs to be patched once.
Why do we pay for software so many times?

Either, you purchase licenses to private code (each customer paying again)
or you rent the software ("As A Service"), or worse of all,
you use a free service, but where your data will be mined for various purposes
(the most benign of which is advertising)

But, there is one business model where you actually pay for the work of creating
that software directly. You can hire a consulting company to create you bespoke software.
If you want a website or an app or anything, and do not have the desire or
the ability to create it your self, this is probably the most common way get new software!

## The Vision

Work is funded in iterations, on a fixed time basis, like a week or two at a time.
Clients and Developers negioate what features they most need or are able to build.
Then the Developers do their best to implement that, and then the Clients are able
to use the results and provide feedback. Then the next iteration is negioated.
Every one is constantly in the loop, and the Clients are able to refocus
development, and get a much clearer idea of what is possible and what is not,
as they see development progress from a prototype to a finished product.

The only difference between this and agile consulting is that "the clients"
are a crowd of people. The difference between this and current crowdfunding
platforms is that Clients will have real power to influence a project.

Since a Client doesn't commit to give all their money at once, the Developers
must keep them happy if they expect to continue to recieve funding.
Since a Client is able to monitor the progress that a project is making,
they may well end up funding a project a lot _more_, because most of the uncertainty
of the potential success of a project is removed.

## The Prototype

The first project that should be funded with ThisIsNotAStartup is ThisIsNotAStartup itself.

Here is a _very simple_ prototype. Transfer money into this bitcoin wallet: [wallet_id]
As the money in the wallet approaches my target 1.2 btc (about $1000 USD)
This progress bar will fill up.

[bar]

The progress bar is just a simple png that you can embed into github issues, or even an email!

If you'd like to fund this idea if it wasn't with bitcoin please comment on this issue here
[BITCOIN_ISSUE]

## The Plan

`Clients` and `Developers` create `Tasks` and plan `Iterations` by posting
issues (on github or similar web-based issue tracking software or discussion platform,
so that ThisIsNotAStartup will be not entangled with github, although for simplicity, I'll just say "Github")

The system can then be implemented as a bot that posts to and scrapes Github.
This avoids the problem of having to implement a fresh discussion platform, Notifications,
User system, etc!

### The workflow:

* Users post issues describing `Features` to be added or `Bugs` to be fixed. ("Tasks")
* Then, `Tasks` will be grouped into an `Iteration`
  (by creating an issue that links to a set of `Tasks`, and contains a progress bar png)
  `Clients` and `Developers` can discuss that iteration, and decide to fund it or not.
  Once funding is complete, the developers decide whether to accept it or not, and then work commences.
* progress can be tracked by posting to the `Iteration` issue, or to the Task issues.
* once the Iteration is complete, the issue is closed.
* ThisIsNotAStartup will have a few aggregations to show project history and status,
  (available as a separate web app)
* there will be pngs representing project status and history which can be added into github
  issues and readmes.
* Users must have a way to associate a bitcoin wallet (which they pay from) with a github account,
  (this can be acomplished via the "sign message" bitcoin feature. Users will sign a message claiming that
  "I am {username}, and I paid {transaction}" and then posting it to the Iteration they are funding.)

Please comment here! [Iteration 1](https://github.com/dominictarr/thisisnotastartup/issues/5)

