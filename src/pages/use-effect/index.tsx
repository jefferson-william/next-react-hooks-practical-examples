import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IGithubUsersRepos } from '~/lib/github-api/type'

const DataFetchingUseEffect = () => {
  const [users, UseUsers] = useState<[IGithubUsersRepos?]>([])

  const HandleApi = useCallback(async () => {
    const response = await axios.get('https://api.github.com/users/quero-edu/repos')

    UseUsers(response.data)
  }, [])

  useEffect(() => {
    HandleApi()

    return () => {
      UseUsers([])
    }
  }, [])

  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>useMemo()</h1>
      <ul>
        {users?.map(user => (
          <li key={user!.id}>{`${user?.name}`}</li>
        ))}
      </ul>
    </>
  )
}

export default DataFetchingUseEffect
