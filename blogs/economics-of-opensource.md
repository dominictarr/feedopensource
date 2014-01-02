# Some Thoughts on the Economics of Software Development

The problem with software development, is that the ways used to fund it
are either more suited to physical products, or are otherwise out of line
with the interests of the users of the software. Here are my thoughts
on the ways this fails, and also an idea for another approach.

## A Summary of the Current Methods

* VC-funded free service
* proprietary software licensed for a fee
* open source, funded by charity, or by the creative drive of it's author.

Each of these methods create a different kind of software.
Essentially, different ways of funding mean different motivations,
and these result in different decisions by the developers.

## The "Free" Service

VC-funded software seems very good at first, but, they aren't really doing
it for free.

The investors are looking to make money, and there is often
a "business model" question hanging over such software.
This question is nearly always resolved by changing what the software does,
from something that enables users, to something that manipulates the user.
If this is the sort of software you would like to use (be used by),
then you are already well catered to! Your Welcome!

## Private Source

Someone builds the software, then you buy it from them.

What could be simpler? This works well with physical goods,
because the exchange is easy to enforce. For example, I have made a bicycle,
and you want to buy it. You give me some pieces of paper with the pictures
of George Washington, or Chairman Mao or whatever, and I give you a bicycle.
This is naturally in line with the physics of physical items, but software is wholly
different. Instead of giving you the bike, with software, I would copy the bike to you.
Now there are two bikes. What's more, it's trivial for you to copy the bike to someone else.
Now there are a lot of people riding my bike, without me being able to recover the value
that I think I deserve for creating it.

So, to make the private source model work, you have to add extra code (copy protection)
to make the software behave more like a physical good. Like turnstiles on a subway,
these copy-protection features prevent you from accessing the natural physics of software.
This takes extra work, and so you end up paying not just for the product itself,
but also for the work to cripple the product so that it's more difficult to replicate.

If the value of the software is high enough (enterprise),
then they can just use lawyers instead of copy protection
features in the software. I'm not sure which is worse.

This is widely used for games, or enterprise applications.
the apple app store is a great example of an elaborate system
for making software difficult to copy.

You purchase a crippled phone that can only install software that apple likes,
and then you can pay for software, and also 30% to apple for
the service of stopping you from being able to install anything else.

## Open Source

Instead of going to the hassle of charging for software,
open source just gives it away.

This eliminates the costs of erecting or maintaining turnstiles. It also reduces the
cost of evaluating software. You don't have to pay for something
to try it out. Open Source has created all the best operating systems,
programming languages, developer tools, and databases.

But the scope of Open Source is pretty much limited to this.
Open Source is created by enthusiasts, and it does get paid for,
but intangibly.

A project usually starts because someone thinks
it might be fun to implement. But then, if that project becomes useful,
it becomes in the interest of other well funded parties. Any large project
requires an extraordinary amount of attention to detail and refinements.

It would not be possible to pursue such a project at hobby scale.
though, still, there is a huge amount of valuable software essentially
created by hobbyists. Tragically, these hobbyists may work a day job
writing "free" services or private software.

## Moving Forward

There have recently been some attempts to move beyond the hobby economics
of open source. Each of these are interesting in their own way.

### gittip

[gittip.com](https://gittip.com) enables you to anonymously
donate to someone. This is the digital equivalent of busking.

You can easily give a small amount of money as encouragement to an artist who's creating things you enjoy.
But this doesn't really influence them in any way. This is an interesting model,
but not many people are earning enough to survive (and thus devote themselves
fully to their art).

By the way, if you enjoy my creations, please feel free to offer me a token of your appreciation: [gittip.com/dominictarr](https://gittip.com/dominictarr)

### Kickstarter, Indiegogo, etc.

Another approach is crowdfunding the development of a project.

The developer makes a bunch of promises of what they want to deliver,
and how much they think it will cost. People either fund it or not.
And then, development begins. If you have been following any of these
projects recently, it won't be hard to think of examples of one that
hasn't really gone according to plan.

All the crowdfunding platforms
and geared towards a single, large, funding round. So, all promises
and plans must be made up front, well in advance.

The problem with promises made well in advance is that they are hard to keep.
Not necessarily because you didn't mean them, but just because the situation changes,
and when you start coding you learn things you didn't know when you started.

Like representational democracy, you don't know if the party you elect (fund)
will keep their promises, or even are capable of achieving them.

Essentially, kickstarter forces you to use the
[waterfall model](http://wikipedia.com/en/waterfall_model).
The waterfall model is widely understood to result in low quality, over-budget software.
Quality software must be built iteratively, changing the plan as your learn things,
but the economics of crowdfunding platforms prevent this.

### Bountysource

Bountysource takes the opposite approach of kickstarter.

Instead of funding a whole project all at once, you can fund a specific issue,
or feature that you want. It's really too early to say what will happen with
Bountysource, but my feeling is that it is too specific where upfront funding is too vague.
The features of a software project are not isolated. You can't just buy a feature
or bug fix. There may be a refactor that simplifies multiple features, or eliminates multiple bugs.
It takes too much understanding from the funder to understand the specific features/bugs that
most need funding.

## One more way

There is one more way software is funded.

If you have a software problem that is particular to you, or just want your own thing,
you can hire a consulting company and get them to make you something bespoke.
This can actually work pretty well, provided that communication between the developers
and the clients is good, and an iterative process of building a prototype, testing it against
client expectations, and refining/rebuilding the design.
This process is often known as [Agile Development](http://wikipedia.org/en/agile_development).

The developers and the clients both have power in their relationship. The developers have
the technical expertise to write the software, but the clients have the cheque book.
If a project is going badly, they can always (depending on their contract) abandon it
and find new consultants.

A lot of software is built this way, but it's completely unscalable. Or is it?

## My idea

What we need is something that aligns the interests of the developers and users,
and also with the natural physics of software development. Something that scales,
so that you can use to fund end-user software - not just developer tools.

Something halfway between Kickstarter, and Bountysource, but with the best part of
Agile development. Development and funding must be iterative. The developers should
not have to make promises that will
be hard to keep. Instead, they build trust with the clients by making steady
incremental progress. If the progress is in the wrong direction, or the developers
turn out to be incompetent, then clients can abandon the project without having over committed.
And if the project goes well, the clients can continue to fund the project.
Since the uncertainty decreases as the developers build the clients trust,
they could potentially fund much more than they would which a single batch of funding,
not really knowing how useful the software will be, or even whether the project will eventually deviler.

Watch this space! I am currently working on a minimal prototype of this idea,
expect an announcement soon!


## Another Possibility!

I think we need something halfway between Bountysource and Kickstarter.

Here is my idea. Crowdsource funding, but instead of funding all at once,
encouraging the waterfall module, fund iteratively to encourage the
[agile development model](http://wikipedia.org/en/agile_development).

Everybody knows that the best customer is a repeat customer.
When you are a repeat customer, you have a more equal power in the relationship.

You may only pay a few dollars today, but potentially you may pay a very large amount
over the course of years or decades. The flow of this value is contingent on your
satisfaction with the vendor. You can always threaten to take your custom
elsewhere, and so the vendor is motivated to satisfy you.

Not only is the best customer a repeat customer, but the best vendor is a vendor
you freely choose to use repeatedly (this does not apply to monopolies).

Instead of funding a software project for it's entire life span, you should fund
only a small amount, like 2 weeks worth. After two weeks the developers
must have some progress to show you, and if it's going in a good direction you
like, you can choose to fund again. This will workout for the developer as well.
Since you are invested in the project, you are motivated to provide useful feedback.

Software can be duplicated endlessly for virtually no cost, but it still needs to
be written once, and then bugs fixed, etc. Work needs to be done by someone
who is talented and experienced, but it only needs to be done once.

It doesn't matter who pays for it, but someone needs to feed those developers
while they work. What is needed is to align the economics of software development
with the physics of software development.

To reduce the friction between creating the best possible software with living in the real world.

## [Agile Crowdfunding??? AgileFund?]

This is my attempt to solve this problem. [name of project] is not a startup.

It's an open source project that funds open source projects. It will not be
run as a platform, but a project you can install and run yourself, like wordpress and not like tumblr.
The prototype is very simple (only a few hours worth of work) and the initial target for the next iteration
is very low. The first test is just whether people are willing to fund a project via a method like this!

Please see the [project website] for more specific details, and if you have more questions,
please post an issue on the [github project].
