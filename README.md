# Hyperapp One Parcel

[![Build Status](https://travis-ci.org/selfup/hyperapp-one-parcel.svg?branch=master)](https://travis-ci.org/selfup/hyperapp-one-parcel) [![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

Hyperapp One Parcel is a Parcel Packager boilerplate for quickstarting a web application with [Hyperapp](https://github.com/hyperapp/hyperapp), SCSS, and JSX.

<h2>Table of Contents</h2>

<!-- TOC -->

* [Installing](#installing)
* [Testing](#testing)
* [Development](#development)
  * [Wiping the Commit History](#wiping-the-commit-history)
  * [Deploying to GitHub Pages](#deploying-to-github-pages)
    * [First Time](#first-time)
    * [Every Time After](#every-time-after)
* [License](#license)

<!-- /TOC -->

## Installing

```bash
git clone https://github.com/selfup/hyperapp-one-parcel
cd hyperapp-one-parcel
npm install
npm start
```

## Testing

All tests can be found at the root of the test directory!

```bash
npm test
```

## Development

Access [localhost:1234](http://localhost:1234).

The browser will reload as you save new code. 🚀

Now go code something awesome!

### Wiping the Commit History

Make sure you are in the boilerplate root and run:

```bash
rm -rf .git
git init
git add .
git commit -m "initial commit"
```

Then add your remote and work from there as usual.

```bash
git remote add origin <ssh_or_https_url>
```

Now work as usual!

### Deploying to GitHub Pages

#### First Time

```bash
git checkout -b gh-pages
npm run ghp-build
git add . && git commit -m "built"
git push origin gh-pages
```

#### Every Time After

```bash
git checkout gh-pages
git merge master
npm run ghp-build
git add . && git commit -m "built"
git push origin gh-pages
```

**Now visit**:

* No custom domain: `yourUserName.github.io/yourRepoName`
* With a custom domain: `yourCustomDomain/yourRepoName`

Currently this repo is on gh-pages via: https://selfup.github.io/hyperapp-one-parcel/

## License

Hyperapp One is MIT licensed. See [LICENSE](LICENSE).
