import React from 'react'
import Link from 'next/link'
import withAnalytics from '~/hocs/withAnalytics'

interface IHocsProps {
  page: string
}

const Hocs = ({ page }: IHocsProps) => {
  return (
    <>
      <p>
        <Link href="/">
          <a>← Início</a>
        </Link>
      </p>
      <h1>{page}</h1>
    </>
  )
}

Hocs.getInitialProps = () => {
  console.log('Hocs.getInitialProps')

  return {
    page: 'Hocs Page',
  }
}

export default withAnalytics()(Hocs)
