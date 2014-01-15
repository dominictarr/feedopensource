
# feedopensource development

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

# generate a ssl cert

openssl genrsa -out server-key.pem 4096
openssl req -new -key server-key.pem -out server-csr.pem

```

and enter your details. when it asks for "FQDN"
"fully qualified domain name" enter the domain name you wish to use.
get a cacert. I got a free cert from https://www.cacert.org
you'll need to paste in the contents of the server-csr.pem file,
and the certificate authority will give you a new pem file,
save this as .feedopensource/server-cert.pem

### configuration

currently default configuration will work.

### starting the server

```
sudo node index.js
```

now you have your own feedopensource instance!


