# Feed Open Source

We need another way to fund software. All the ways we currently use are
[broken or unscalable](
http://dominictarr.com/post/71958587606/some-thoughts-on-the-economics-of-software-development). We need a model that
Aligns the interests of the users of the software with it's creators,
while also working with the natural, copy-to-distribute, physics of data

So, I present feedopensource!

## TL;DR

Request features and post issues as-per normal [https://github.com/dominictarr/feedopensource/issues),
but then group (say) two weeks worth of features/bugs into an "iteration"
which may be crowd-funded. After each iteration, clients trial the new version,
provide feedback and if they are happy with progress, continue to fund the project.

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
[the economics of software development](
http://dominictarr.com/post/71958587606/some-thoughts-on-the-economics-of-software-development)

## The Vision

Work is funded in iterations, on a fixed time basis, a week or two at a time.
`Clients` and `Developers` negioate what features they most need or are able to build within the timeframe.
Then the `Developers` do their best to implement that, and then the `Clients` are able
to use the results and provide feedback. Then the next iteration is negioated.
Every one is constantly in the loop, and the Clients are able to refocus
development. At the same time, the `Clients` can see the project improving, and so
get a more accurate understanding of the software development process.

The difference between this and typical agile consulting is that "the clients"
are a crowd of people. The difference between this and current crowdfunding
platforms is that Clients will have real power to influence a project,
and keep it on task.

Since a `Client` does not commit all their money at once, the `Developers`
must keep them happy if are to continue to recieve funding.
Since a `Client` is able to monitor the progress that a project is making,
they may well end up funding a project a lot _more_, because most of the uncertainty
of the potential success of a project is removed.

## This is _not_ a startup.

This is not a platform, or Anything as a Service.
This is just on open source tool for feeding open source.
But this is also a tool for aligning a developers interests with your own.
(don't bite the hand that feeds you)

feedopensource will not take any fees, have plans to signup to,
and doesn't charge anything for you to use it.
There is no terms of service that may change without notice.

What there is: an [liberal open-source license](./LICENSE), you may use feedopensource
to fund your own project, as feedopensource uses feedopensource to feed itself!

## The Prototype

Here is a _very simple_ prototype. On github I have a description of the goals for the
[next iteration](https://github.com/dominictarr/feedopensource/issues).

Transfer money into this bitcoin wallet `1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu`
As the money in the wallet approaches the target 1.2 btc (about $1000 USD)
you'll see the progress bar fill up, and then I'll begin on the next iteration.

[![progress bar](/badge/1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu/1.2)](bitcoin:1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu)

The progress bar is just a simple png that you can embed into github issues, or even an email!

If you would fund this if it wasn't with bitcoin please comment on
[this issue](https://github.com/dominictarr/feedopensource/issues/6)

## The Plan

`Clients` and `Developers` create `Tasks` and plan `Iterations` by posting
issues (on github or similar web-based issue tracking software or discussion platform,
so that feedopensource will be not entangled with github, although for simplicity,
I'll just say "Github" but I mean any issue tracker/repo manager)

feedopensoure will be implemented as a bot that posts to and scrapes/api Github.
This avoids the problem of having to implement a fresh discussion platform, Notifications,
User system, etc!

This is gonna use bitcoin, because 1) bitcoin is open source money and 2)
bitcoin is so much easier to build services on top of than regular money.

## The Workflow:

* `Clients` (users who may fund) post issues describing `Features` to be added or `Bugs` to be fixed.
  ([Tasks](https://github.com/dominictarr/feedopensource/issues/1))
* Then, `Tasks` will be grouped into an [Iteration](https://github.com/dominictarr/feedopensource/issues/3)
  (an `Iteration` is just an issue that links to a set of `Tasks`, and contains a
  [progress bar](https://github.com/dominictarr/feedopensource/issues/2))
  `Clients` and `Developers` can discuss that iteration, and decide to fund it or not.
  Once funding is complete, the developers decide whether to accept it or not, and then work commences.
* progress can be tracked by posting to the `Iteration` issue, or to the Task issues.
  as the Tasks progress (are closed) the progress bar updates.
* Once the Iteration is complete, the issue is closed.
* there will be progress bar pngs representing project status and history which can easily be added into github
  issues and readmes.
* Users will have a way to associate a bitcoin wallet with a github account, to
  [claim their payment](https://github.com/dominictarr/feedopensource/issues/5)

Please fund the first iteration by making a payment to:
[1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu](bitcoin:1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu)
and discuss here: [Iteration 1](https://github.com/dominictarr/feedopensource/issues/5)
