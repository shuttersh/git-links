# git-links

Parse git remote URLs to shorthand format as used in the package.json `repository` field and resolve shorthand links to full URLs.

Great for normalizing and denormalizing links to repositories, branches and pull requests.


## Installation

```sh
$ npm install git-links
# or using yarn:
$ yarn add git-links
```


## Usage

```js
import { getShortLink, getBranchPageLink, getPullRequestLink, getRepoPageLink } from 'git-links'

getShortLink('git@github.com:piuccio/cowsay.git')
// => 'github:piuccio/cowsay'
getShortLink('https://gitlab.com/gitlab-org/gitlab-ce.git')
// => 'gitlab:gitlab-org/gitlab-ce'

getRepoPageLink('git@github.com:piuccio/cowsay.git')
// => 'https://github.com/piuccio/cowsay'
getRepoPageLink('github:facebook/react')
// => 'https://github.com/facebook/react'

getBranchPageLink('github:facebook/react', '15-stable')
// => 'https://github.com/facebook/react/tree/15-stable'

getPullRequestLink('bitbucket:ftrack/ftrack-connect', '227')
// => 'https://bitbucket.org/ftrack/ftrack-connect/pull-requests/227'
```


## License

MIT
