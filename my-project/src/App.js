import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.css'
// import DetailPage from './page/detail/detail'
const AppLoading = () => {
  return null
}

const MainPage = Loadable({
  loader: () => import('./page/main/main'),
  loading: AppLoading
})

const DetailPage = Loadable({
  loader: () => import('./page/detail/detail'),
  loading: AppLoading
})

const MemberPage = Loadable({
  loader: () => import('./page/member/member'),
  loading: AppLoading
})

// const profilePage = Loadable({
//   loader: () => import('./page/member/profile'),
//   loading: AppLoading
// })

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/detail/:product_id" component={DetailPage}/>
          <Route path="/member" component={MemberPage} />
          {/* <Route exact path="/member/profile" component={profilePage} /> */}
        </Switch>
        {/* <Redirect to="/404" /> */}
      </Router>
    )
  }
}
export default App;
