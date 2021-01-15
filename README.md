# gatsby-artopen

A [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic website.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Demo
[Gatsby Starter Business](https://artopen.netlify.app)

## Features
* Blog, portfolio markdown.
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Tags and RSS Feed for Blog
* Disqus and Share Support
* Elastic-Lunr Search for blog and portfolio.
* Pagination
* Contact Form

## Prerequisite
* Node
* Gatsby CLI (globally installed)

## Getting Started
Create your own project with Gatsby CLI:
```shell
gatsby new yourname https://github.com/Ys-sudo/gatsby-artopen
```

## Available Scripts

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint
Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean
Remove the .cache and public for a scratch compile.
```shell
yarn clean
```

## Configuration
To personalize and configure this Starter open `config.js` file and replace the default values.


You can read up on how to set up Identity(Authentication for CMS User) here [How To Set Up Netlify CMS](https://www.netlifycms.org/docs/add-to-your-site/)
