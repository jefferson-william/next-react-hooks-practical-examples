import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IGithubUsersRepos } from '~/lib/github-api/type'
import { IDataFetchingProps } from '../../typed/pages/type'

const DataFetching = ({ payload }: IDataFetchingProps) => {
  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>Data Fetching</h1>
      <ul>
        {payload?.map((user: IGithubUsersRepos) => (
          <li key={user.id}>{`${user.name} - ${user.full_name}`}</li>
        ))}
      </ul>
    </>
  )
}

DataFetching.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/users/quero-edu/repos')

  return { payload: response.data }
}

export default DataFetching
