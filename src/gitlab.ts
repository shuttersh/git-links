import { assertNumericPRID } from './assertions'

interface Parsed {
  user: string
  repo: string
}

export function matches (repo: string): boolean {
  return parse(repo) !== null
}

function parse (link: string): Parsed | null {
  if (link.startsWith('gitlab:')) {
    const [ user, repo ] = link.replace(/^gitlab:/, '').split('/')
    return { user, repo }
  } else if (/^https?:\/\/gitlab\.com\//i.test(link)) {
    const [ user, repo ] = link.replace(/^https?:\/\/gitlab\.com\//i, '').replace(/\.git$/, '').split('/')
    return { user, repo }
  } else if (/^[a-z]+@gitlab\.com:/i.test(link)) {
    const [ user, repo ] = link.replace(/^[a-z]+@gitlab\.com:/i, '').replace(/\.git$/, '').split('/')
    return { user, repo }
  }
  return null
}

function parseOrThrow (link: string): Parsed {
  const parsed = parse(link)
  if (parsed) {
    return parsed
  } else {
    throw new Error(`Cannot parse GitLab repository link: ${link}`)
  }
}

export function getShortLink (link: string): string {
  const { user, repo } = parseOrThrow(link)
  return `gitlab:${user}/${repo}`
}

export function getRepoPageLink (link: string): string {
  const { user, repo } = parseOrThrow(link)
  return `https://gitlab.com/${user}/${repo}`
}

export function getBranchPageLink (link: string, branchName: string): string {
  const { user, repo } = parseOrThrow(link)
  return `https://gitlab.com/${user}/${repo}/tree/${branchName}`
}

export function getPullRequestLink (link: string, pullReqID: string | number): string {
  assertNumericPRID(pullReqID)

  const { user, repo } = parseOrThrow(link)
  return `https://gitlab.com/${user}/${repo}/merge_requests/${pullReqID}`
}
