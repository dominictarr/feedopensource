
# run your own feedopensource project.

If you want to run your own `feedopensource`
project you need two things:

1. bitcoin client (you don't need any bitcoins yet)
2. github account
3. a prototype of a cool opensource project.

I'm assuming you already have `2 & 3` under control.

## first iteration.

create an github issue describing the next iteration.
to be a valid feedopensource iteration it only needs two things

* A `feedopensource` progress bar badge.
* links to other issues that are to be implemented in the iteration.

each iteration MUST use a new bitcoin wallet. the progress bar represents
the total deposits into that wallet, not the current balance.
feel free to transfer that money into another wallet.

links to tasks MUST be in the post that creates the issue,
not in a comment. You can always edit an issue to add or remove links.

## badge

``` js
[![feedopensource badge](
  https://feedopensource.com/iteration/{github_user}/{github_repo}/{bitcoin_address}.png#{target}
)](
  https://feedopensource.com/iteration/{github_user}/{github_repo}/{bitcoin_address}
)
```
note the `.png` and `#{target}` fragment. these are both essential.
`#{target}` should be a decimal abount in bitcoins.

## that's all!

Now find some other people who want your project to exist
but do not have time/expertise to work on it.

Currently `feedopensource` is very simple.
It's up to you to decide how to use it best,
and keep your funders satisfied.

