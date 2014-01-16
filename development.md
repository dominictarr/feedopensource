
# developing feedopensource (the unix way)

feedopensource is just aggregates from
https://github.com and https://blockchain.info

one part of this is gathering JSON, and mushing it together to
get the stuff that matters to feedopensource.

the other part is generating from that data for a human to view.

each part is separated, for ease of testing.

use feedopensource as a cli tool, to get api data.

``` js
> node ./lib/index.js iteration dominictarr feedopensource 1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu
#lots of JSON
```
you can get exactly the same data from the api.

``` js
>node index.js &
>curl localhost:8000/iteration/dominictarr/feedopensource/1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu.json
#lots of JSON
```

the html views are really just a transform, taking data and turning it into html.
they can be used via a web browser, but also by pipeing data into the view on stdin.

``` js
#save iteration.json to use while testing views/iteration.js
> node ./lib/index.js iteration dominictarr feedopensource 1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu > iteration.json
> node ./views/index.js iteration < iteration.json
# lots of HTML
```
# progress bar

pipe output of iteration query into badge generation, get png data
``` js
node ./api/index.js iteration \
  dominictarr feedopensource  \
  1PTAwipYpP63uNrcxfm5FewxRdZyar6ceu \
  | node ./lib/badge.js > badge.png
```
This means you can work on the html offline,
and get expected output for tests, etc.

