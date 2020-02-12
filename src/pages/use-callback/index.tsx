import React, { useState, useCallback } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IGithubUsersRepos } from '~/lib/github-api/type'

const DataFetchingUseCallback = () => {
  const [users, UseUsers] = useState<[IGithubUsersRepos?]>([])

  const HandleApi = useCallback(async () => {
    const response = await axios.get('https://api.github.com/users/quero-edu/repos')

    UseUsers(response.data)
  }, [])

  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>useCallback()</h1>
      <button onClick={HandleApi}>Carregar repositórios</button>
      <ul>
        {users?.map(user => (
          <li key={user!.id}>{`${user?.name}`}</li>
        ))}
      </ul>
    </>
  )
}

export default DataFetchingUseCallback
