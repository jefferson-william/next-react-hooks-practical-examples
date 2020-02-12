import { NextPageContext } from 'next'

export interface IGithubUsersRepos {
  id: Number | DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  name: String
  full_name: String
}
