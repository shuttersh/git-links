import test from 'ava'
import { getShortLink, getBranchPageLink, getRepoPageLink, getPullRequestLink } from '../src'

test('can getShortLink()', t => {
  t.is(
    getShortLink('git@github.com:piuccio/cowsay.git'),
    'github:piuccio/cowsay'
  )
  t.is(
    getShortLink('https://gitlab.com/gitlab-org/gitlab-ce.git'),
    'gitlab:gitlab-org/gitlab-ce'
  )
  t.is(
    getShortLink('https://bitbucket.org/ftrack/ftrack-connect/'),
    'bitbucket:ftrack/ftrack-connect'
  )
  t.is(
    getShortLink('github:piuccio/cowsay'),
    'github:piuccio/cowsay'
  )
})

test('can getRepoPageLink()', t => {
  t.is(
    getRepoPageLink('git@github.com:piuccio/cowsay.git'),
    'https://github.com/piuccio/cowsay'
  )
  t.is(
    getRepoPageLink('github:facebook/react'),
    'https://github.com/facebook/react'
  )
})

test('can getBranchPageLink()', t => {
  t.is(
    getBranchPageLink('github:facebook/react', '15-stable'),
    'https://github.com/facebook/react/tree/15-stable'
  )
  t.is(
    getBranchPageLink('https://gitlab.com/gitlab-org/gitlab-ce/', 'foo'),
    'https://gitlab.com/gitlab-org/gitlab-ce/tree/foo'
  )
})


test('can getPullRequestLink()', t => {
  t.is(
    getPullRequestLink('github:andywer/threads.js', '63'),
    'https://github.com/andywer/threads.js/pull/63'
  )
  t.is(
    getPullRequestLink('bitbucket:ftrack/ftrack-connect', '227'),
    'https://bitbucket.org/ftrack/ftrack-connect/pull-requests/227'
  )
})
