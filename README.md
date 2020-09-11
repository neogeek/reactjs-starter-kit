![React.js Starter Kit](/static/images/logo.png)

> This repo is a starter kit for working with React.js and ES6.

[![Dependency Status](https://david-dm.org/neogeek/reactjs-starter-kit.svg)](https://david-dm.org/neogeek/reactjs-starter-kit)
[![devDependency Status](https://david-dm.org/neogeek/reactjs-starter-kit/dev-status.svg)](https://david-dm.org/neogeek/reactjs-starter-kit?type=dev)

## Install to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Getting Started

Run the following command to download the repo and unpack it into `reactjs-starter-kit-master/`.

```bash
$ curl -L https://github.com/neogeek/reactjs-starter-kit/archive/master.tar.gz | tar -xz
```

## Bash Alias

Add the following to your `~/.bash_profile` and restart terminal. You will now be able to create a new project using the starter kit by typing `create-reactjs-starter-kittest` (replacing _test_ with your new project name).

```bash
create-reactjs-starter-kit() {

    curl -L https://github.com/neogeek/reactjs-starter-kit/archive/master.tar.gz | tar -xz
    mkdir -p "${1}"
    mv reactjs-starter-kit-master/{*,.[^.]*} "${1}"
    rm -d reactjs-starter-kit-master
    cd "${1}" || exit
    npm install

}
```
