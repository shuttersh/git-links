import { assertNumericPRID } from './assertions'

interface Parsed {
  user: string
  repo: string
}

export function matches (repo: string): boolean {
  return parse(repo) !== null
}

function parse (link: string): Parsed | null {
  if (link.startsWith('bitbucket:')) {
    const [ user, repo ] = link.replace(/^bitbucket:/, '').split('/')
    return { user, repo }
  } else if (/^https?:\/\/bitbucket\.org\//i.test(link)) {
    const [ user, repo ] = link.replace(/^https?:\/\/bitbucket\.org\//i, '').replace(/\.git$/, '').split('/')
    return { user, repo }
  } else if (/^[a-z]+@bitbucket\.org:/i.test(link)) {
    const [ user, repo ] = link.replace(/^[a-z]+@bitbucket\.org:/i, '').replace(/\.git$/, '').split('/')
    return { user, repo }
  }
  return null
}

function parseOrThrow (link: string): Parsed {
  const parsed = parse(link)
  if (parsed) {
    return parsed
  } else {
    throw new Error(`Cannot parse Bitbucket repository link: ${link}`)
  }
}

export function getShortLink (link: string): string {
  const { user, repo } = parseOrThrow(link)
  return `bitbucket:${user}/${repo}`
}

export function getRepoPageLink (link: string): string {
  const { user, repo } = parseOrThrow(link)
  return `https://bitbucket.org/${user}/${repo}`
}

export function getBranchPageLink (link: string, branchName: string): string {
  const { user, repo } = parseOrThrow(link)
  return `https://bitbucket.org/${user}/${repo}/branch/${branchName}`
}

export function getPullRequestLink (link: string, pullReqID: string | number): string {
  assertNumericPRID(pullReqID)

  const { user, repo } = parseOrThrow(link)
  return `https://bitbucket.org/${user}/${repo}/pull-requests/${pullReqID}`
}
