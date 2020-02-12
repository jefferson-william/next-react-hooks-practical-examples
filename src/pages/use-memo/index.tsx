import React, { useState, useCallback, useMemo } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { IGithubUsersRepos } from '~/lib/github-api/type'

const DataFetchingUseEffect = () => {
  const [users, UseUsers] = useState<[IGithubUsersRepos?]>([])

  const HandleApi = useCallback(async () => {
    const response = await axios.get('https://api.github.com/users/quero-edu/repos')

    UseUsers(response.data)
  }, [])

  const user = useMemo(() => (users ? users[0] : null), [users])

  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>useMemo()</h1>
      <button onClick={HandleApi}>
        Carregar repositóri<strong>o</strong>
      </button>
      <p>{user?.full_name}</p>
    </>
  )
}

export default DataFetchingUseEffect
