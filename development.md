## install

``` js
git clone git:github.com/dominictarr/feedopensource.git
cd feedopensource
npm install
```

## deploy

you'll need to aquire an ssl cert, a domain, and a server.

### generate ssl key and cert

``` js
cd ~
mkdir .feedopensource
cd .feedopensource

### generate a ssl cert

openssl genrsa -out server-key.pem 4096
openssl req -new -key server-key.pem -out server-csr.pem

```

and enter your details. when it asks for "FQDN"
"fully qualified domain name" enter the domain name you wish to use.
get a cacert. I got a free cert from https://www.cacert.org
you'll need to paste in the contents of the server-csr.pem file,
and the certificate authority will give you a new pem file,
save this as .feedopensource/server-cert.pem

### github application id

If you don't auth to the github api you'll be limited to 60 requests persecond.
If your project gets popular, or you are doing development on it `feedopensource`,
you'll probably go over this.

first [register your application](https://github.com/settings/applications/new)
then put the `id` and `secret` in your `.feedopensource/config` file.

``` js
{
  "id": "{client_id}",
  "secret": "{client_secret}"
}
```
must be valid JSON or INI format. See [rc](https://github.com/dominictarr/rc)

### configuration

currently default configuration will work.

### starting the server

```
sudo node index.js
```
now you have your own feedopensource instance!
I run my server on archlinux, so I use systemd.
use [this tool](https://github.com/dominictarr/create-systemd-service)
for an easy way to create a `systemd` service.


### api queries, views, and badge are unixy.

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

