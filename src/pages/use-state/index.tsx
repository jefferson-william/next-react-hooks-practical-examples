import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IGithubUsersRepos } from '~/lib/github-api/type'
import { IDataFetchingProps } from '~/typed/pages/type'

const DataFetchingUseState = ({ payload }: IDataFetchingProps) => {
  const [users, UseUsers] = useState<[IGithubUsersRepos]>(payload)

  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>useState()</h1>
      <ul>
        {users?.map(user => (
          <li key={user.id}>{`${user.name}`}</li>
        ))}
      </ul>
    </>
  )
}

DataFetchingUseState.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/users/quero-edu/repos')

  return { payload: response.data }
}

export default DataFetchingUseState
