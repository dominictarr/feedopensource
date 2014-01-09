# Feed Open Source

We need another way to fund software. All the other ways are
[broken or unscalable](
http://dominictarr.com/post/71958587606/some-thoughts-on-the-economics-of-software-development).
We need to align the interests of the users with developers,
Feeding developers, while still allowing software to be copied freely.

## The Problem

Software only needs to be written once. Bugs need to be patched,
but a bug only needs to be patched once.

Why do we pay for software so many times or not at all?
Software should be paid for exactly once.

You can't sell software like you sell physical items,
because software is too easy to copy.
But what you _can sell_ is _a promise to write software_

## The Vision

Take agile consulting to the crowds.

Work is funded in iterations, on a fixed time basis, a week or two at a time.
Clients and developers negotiate what features they are most need in the next iteration.
The developers implement that, and the clients evaluate it. Repeat.
Every one is constantly in the loop.
The clients can see the project improving, and so get a more accurate
understanding of the software development process.
The developers don't have to make ambitious promises that will be hard to keep,
and may be the wrong idea anyway!

The difference between this and agile consulting is that "the clients"
are a crowd of people. The difference between this and current crowd-funding
platforms is that Clients will have real power to influence a project,
and keep it on task.

Since a client does not have to commit all their money at once, the developers
must keep them satisfied if are to continue to receive funding.
For the client, most of the uncertainty about the project is removed.
They may well end up funding it even more, because they do not need to weigh up
the cost of funding against their estimations of the projects success.

## This is _not_ a startup.

This is not a platform, or Anything as a Service.
This is just on open source tool for feeding open source.
`feedopensource` will not take any fees, have plans to sign up to,
and doesn't charge anything for you to use it.
There is no terms of service that may change without notice.

What there is: an [liberal open-source license](./LICENSE), you may use `feedopensource`
to fund your own project, as `feedopensource` uses `feedopensource` to feed itself!

## The Prototype

Here is a _very simple_ prototype. On github I have a description of the goals for the
[next iteration](https://github.com/dominictarr/feedopensource/issues/5).

Transfer money into this bitcoin wallet `1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu`
As the money in the wallet approaches the target 1.2 btc (about $1000 USD)
you'll see the progress bar fill up, and then I'll begin on the next iteration.

[![progress bar](http://feedopensource.com/badge/1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu/1.2)](bitcoin:1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu)

The progress bar is just a simple png that you can embed into github issues, or even an email!

Please [email me](mailto:dominic.tarr@gmail.com) after your payment.
see also [this issue](https://github.com/dominictarr/feedopensource/issues/5)

If you would fund this if it wasn't with bitcoin please comment on
[this issue](https://github.com/dominictarr/feedopensource/issues/6)

## The Plan

`Clients` and `Developers` post issues to `Tasks` and plan `Iterations`.
 (on github or [similar](https://github.com/dominictarr/feedopensource/issues/7))

`feedopensoure` will be implemented as a bot that posts to and scrapes/apis Github.
This avoids the problem of having to implement a fresh discussion platform, Notifications,
User system, etc!

This is gonna use bitcoin, because 1) bitcoin is open source money and 2)
bitcoin is so much easier to build services on top of than regular money.

Please comment on the [first iteration!](

## The Workflow

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

## Feed me

Please fund the first iteration by making a payment to:
[1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu](bitcoin:1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu)
and discuss here: [Iteration 1](https://github.com/dominictarr/feedopensource/issues/5)

