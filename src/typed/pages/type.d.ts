import { NextPageContext } from 'next'
import { IGithubUsersRepos } from '~/lib/github-api/type'

export interface IDataFetchingProps extends NextPageContext {
  payload: [IGithubUsersRepos]
}
