# Carpenter

minimal template/static-site generator

given a text file...

```
carpenter sourceFile destFile {opts}

# insert output of a shell command
{{{!date}}} 

# insert a commandline options `--name foo`
{{{-name}}}

# insert output of a javascript expression
{{{=Math.random()}}}

```

try running carpenter on this readme!

```
carpenter README.md
```


## License

MIT
