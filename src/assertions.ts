export function assertNumericPRID (pullReqID: string | number) {
  if (typeof pullReqID !== 'number' && isNaN(parseInt(pullReqID, 10))) throw new Error(`Pull request ID must be a number: ${pullReqID}`)
  if (typeof pullReqID !== 'number' && parseInt(pullReqID, 10) < 1) throw new Error(`Pull request ID must be greater than zero: ${pullReqID}`)

  return pullReqID
}
