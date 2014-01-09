# Feed Open Source

We need another way to fund software. All the other ways are
[broken or unscalable](
http://dominictarr.com/post/71958587606/some-thoughts-on-the-economics-of-software-development).
We need to align the interests of the users with developers.
We need to feeding developers, but still allow software to be distributed freely.

## The Problem

Software only needs to be written once. Bugs need to be patched,
but a bug only needs to be patched once.

Why do we pay for software many times, or not at all?  
Software should be paid for exactly once.

You can't sell software like you sell physical items,
because software is too easy to copy.

What you can sell: _a promise to write software_

## The Vision

Take agile consulting to the crowds.

Work is funded in iterations, on a fixed time basis, a week or two at a time.
Clients and developers negotiate what features they are most need in the next iteration.
The developers implement that, and the clients evaluate it. Repeat.
Every one is constantly in the loop.

*feedopensource* is different to agile consulting because "the clients"
re a crowd of people.
*feedopensource* is different to crowd-funding platforms because clients
will have real power to influence a project, and keep it on task.

A client does not commit all their money at once, so the developers
must keep them satisfied to receive funding in the future.
For the client, most of the uncertainty about the project is removed,
because they see it improve at each stage.

Less uncertainty means clients can fund more,
because they know the value they are getting.

## This is _not_ a startup.

This is not Anything as a Service.  
This is not an Anything-Platform.  

This is just an open source tool for feeding open source projects.  

*feedopensource* will not take any fees, nor have plans to sign up to. 
*feedopensource* does not have a terms of service that may change without notice.

*feedopensource* has a [liberal open-source license](./LICENSE).
you may use *feedopensource* to fund your own projects,
as *feedopensource* feeds it self with *feedopensource*

## The Prototype

You are looking at a _very simple_ prototype.
On github I have a description of the goals for the
[next iteration](https://github.com/dominictarr/feedopensource/issues/5).

Transfer money into this bitcoin wallet `1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu`
and as the funds approach the target (1.2 btc, about $1000 USD)
you'll see the progress bar fill up. then I'll begin on the next iteration.

[![progress bar](http://feedopensource.com/badge/1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu/1.2)](bitcoin:1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu)

The progress bar is just a simple png that you can embed into github issues, or even an email!

Please [email me](mailto:dominic.tarr@gmail.com) after your payment with the transaction id.
also see [this issue](https://github.com/dominictarr/feedopensource/issues/5)

If you would fund this if it wasn't with bitcoin please comment on
[this issue](https://github.com/dominictarr/feedopensource/issues/6)

## The Plan

`Clients` and `Developers` post issues to `Tasks` and plan `Iterations`.
 (on github or [similar](https://github.com/dominictarr/feedopensource/issues/7))

*feedopensoure* will be implemented as a bot that posts to and scrapes/apis Github.
This avoids the problem of having to implement a fresh discussion platform, Notifications,
User system, etc!

We will use  bitcoin, because 1) bitcoin is open source money and 2)
bitcoin is so much easier to build services on top of than regular money.

Please comment on the [first iteration!](https://github.com/dominictarr/feedopensource/issues/4)

## The Workflow

In the future you might use *feedopensource* like this:

* `Clients` (users who may fund) post issues describing `Features` to be added or `Bugs` to be fixed.
  (["Tasks"](https://github.com/dominictarr/feedopensource/issues/1))
* Then, `Tasks` will be grouped into an [Iteration](https://github.com/dominictarr/feedopensource/issues/3)
  (an `"Iteration"` is just an issue that links to a set of `Tasks` with a
  [progress bar](https://github.com/dominictarr/feedopensource/issues/2))
  `Clients` and `Developers` can discuss that iteration, and decide to fund it or not.
  Once funding is complete, the developers decide whether to accept it or not, and then work commences.
* progress can be tracked by posting to the `Iteration` issue, or to the Task issues.
  as the Tasks progress (are closed) the progress bar updates.
* Once the Iteration is complete, the issue is closed.
* there will be progress bar pngs representing project status and history which can easily be added into github
  issues and readmes.
* Users will have a way to associate a bitcoin wallet with a github account, so they can
  [claim their payment](https://github.com/dominictarr/feedopensource/issues/5)

## Feed me

Please fund the first iteration by making a payment to:
[1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu](bitcoin:1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu)
and discuss here: [Iteration 1](https://github.com/dominictarr/feedopensource/issues/5)

