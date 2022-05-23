export type minConcept = {
  name: string
  rxcui: string
  tty: string
}

export type InteractionPair = {
  interactionConcept: Array<{
    minConcept: minConcept
  }>
  severity: string
  description: string
}

export type FullInteractionsTypes = {
  comment: string
  minConcept: minConcept
  interactionPair: Array<InteractionPair>
}

export type FullInteractionsTypeGroup = {
  sourceDisclaimer: string
  sourceName: string
  fullInteractionType: Array<FullInteractionsTypes>
}

export type Interactions = {
  nlmDisclaimer: string
  fullInteractionTypeGroup: Array<FullInteractionsTypeGroup>
}
