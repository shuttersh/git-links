import * as bitbucket from './bitbucket'
import * as github from './github'
import * as gitlab from './gitlab'

const implementations = [
  bitbucket,
  github,
  gitlab
]

function getImplementation (link: string) {
  const implementation = implementations.find(impl => impl.matches(link))
  if (implementation) {
    return implementation
  } else {
    throw new Error(`Unable to parse git link: ${link}`)
  }
}

export function getShortLink (link: string): string {
  return getImplementation(link).getShortLink(link)
}

export function getRepoPageLink (link: string): string {
  return getImplementation(link).getRepoPageLink(link)
}

export function getBranchPageLink (link: string, branchName: string): string {
  return getImplementation(link).getBranchPageLink(link, branchName)
}

export function getPullRequestLink (link: string, pullReqID: string): string {
  return getImplementation(link).getPullRequestLink(link, pullReqID)
}
