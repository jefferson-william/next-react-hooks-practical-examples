import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Root from '~/pages'
import Users from '~/pages/users'
import UsersName from '~/pages/users/[name]'
import Primary from '~/pages/primary'
import Secondary from '~/pages/secondary'
import SecondaryFoo from '~/pages/secondary/[foo]'
import NumbersNumbers from '~/pages/numbers/[numbers]'

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Root} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/users/:name" component={UsersName} exact />
        <Route path="/(primaries|landing-pages)" component={Primary} exact />
        <Route path="/secondary" component={Secondary} exact />
        <Route path="/secondary/:foo" component={SecondaryFoo} exact />
        <Route path="/numbers/:numbers" component={NumbersNumbers} exact />
      </Switch>
    </BrowserRouter>
  )
}
