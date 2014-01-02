# Feed Open Source

We need another way to fund software. All the ways we currently use are
[broken or unscalable]
(http://dominictarr.com/post/71958587606/some-thoughts-on-the-economics-of-software-development). We need a model that
Aligns the interests of the users of the software with it's creators,
while also working with the natural, (post-scarcity) physics of data

So, I present feedopensource!

## TL;DR

request features and post issues as normal [https://github.com/dominictarr/feedopensource/issues),
but then group (say) two weeks worth of features/bugs into an iteration
which may be crowd-funded. After each iteration, clients use the trial the new version,
provide feedback and if they are happy with progress, fund the next stage.

## This Is NOT a Startup.

This is not a platform, or Anything as a Service.
This is just on open source tool for feeding open source developers.
But this is also a tool for aligning a developers interests with your own
(don't bite the hand that feeds you)

feedopensource will not take any fees, have plans to signup to,
and doesn't charge anything for it's own use.
There is no terms of service that may change without notice.

What there is: an liberal open source license, you may use feedopensource
to fund your own project, as feedopensource uses feedopensource to feed itself!

## The Problem

Software only needs to be written once. Bugs need to be patched,
but a bug only needs to be patched once. Why do we pay for software so many times?

Either, you purchase licenses to private code (each customer paying again)
or you rent the software ("As A Service"), or worse of all,
you use a free service, but where your data will be mined for various purposes
(the most benign of which is advertising)

But, there is one business model where you actually pay for the work of creating
that software directly. You can hire a consulting company to create you bespoke software.
If you want a website or an app or anything, and do not have the desire or
the ability to create it your self, this is probably the most common way get new software!

See this blog post for a deeper look into
[the economics of software development]
(http://dominictarr.com/post/71958587606/some-thoughts-on-the-economics-of-software-development)

## The Vision

Work is funded in iterations, on a fixed time basis, a week or two at a time.
`Clients` and `Developers` negioate what features they most need or are able to build within the timeframe.
Then the `Developers` do their best to implement that, and then the `Clients` are able
to use the results and provide feedback. Then the next iteration is negioated.
Every one is constantly in the loop, and the Clients are able to refocus
development (because nothing is forcing them to fund the next iteration).
As they see development progress from a prototype towards a finished product,
`Clients` get a much clearer idea of what is possible and what is not.

The difference between this and agile consulting is that "the clients"
are a crowd of people. The difference between this and current crowdfunding
platforms is that Clients will have real power to influence a project.

Since a `Client` does not commit all their money at once, the `Developers`
must keep them happy if are to continue to recieve funding.
Since a `Client` is able to monitor the progress that a project is making,
they may well end up funding a project a lot _more_, because most of the uncertainty
of the potential success of a project is removed.

## The Prototype

The first project that should be funded with ThisIsNotAStartup is ThisIsNotAStartup itself.

Here is a _very simple_ prototype. Transfer money into this bitcoin wallet: [wallet_id]
As the money in the wallet approaches my target 1.2 btc (about $1000 USD)
you'll see the progress bar fill up, and then I'll begin on the next iteration.

[bar]

The progress bar is just a simple png that you can embed into github issues, or even an email!

If you'd like to fund this idea if it wasn't with bitcoin please comment on this issue here
[BITCOIN_ISSUE]

## The Plan

`Clients` and `Developers` create `Tasks` and plan `Iterations` by posting
issues (on github or similar web-based issue tracking software or discussion platform,
so that feedopensource will be not entangled with github, although for simplicity,
I'll just say "Github" but I mean any issue tracker/repo manager)

feedopensoure will be implemented as a bot that posts to and scrapes/api Github.
This avoids the problem of having to implement a fresh discussion platform, Notifications,
User system, etc!

## The workflow:

* `Clients` (users who may fund) post issues describing `Features` to be added or `Bugs` to be fixed. ("Tasks")
* Then, `Tasks` will be grouped into an `Iteration`
  (an `Iteration` is just an issue that links to a set of `Tasks`, and contains a progress bar png)
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

Please comment here! [Iteration 1](https://github.com/dominictarr/feedopensource/issues/5)

