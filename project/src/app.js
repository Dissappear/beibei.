require ("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import BuyCarComponent from "./scripts/components/buyCar/BuyCarComponent"

import LookNewComponent from "./scripts/components/lookNew/LookNewComponent"
import Detail from "./scripts/components/detail"
import TodaySpecial from "./scripts/components/todaySpecial/TodaySpecial"
import TodayTypes from "./scripts/components/todaySpecial/TodayTypes"
import Todaylist from "./scripts/components/todaySpecial/todaylist"
import mineSpecial from "./scripts/components/mine/MineComponent"
import GroupBuy from "./scripts/components/groupBuy/GroupBuyComponent"
import MineComponent from "./scripts/components/mine/MineComponent"
import {Provider} from 'react-redux'

import store from './scripts/redux/store'
ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            <IndexRoute component={TodaySpecial} />
            <Route path="/today" component={TodaySpecial}></Route>
            <Route path="/types" component={TodayTypes}></Route>
            <Route path="/looknew" component={LookNewComponent}></Route>
            <Route path="/buycar" component={BuyCarComponent}></Route>
            <Route path="/mine" component={mineSpecial}></Route>
            <Route path="/list" component={Todaylist}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/pintuan" component={GroupBuy}></Route>
            <Route path="/today" component={TodaySpecial}></Route>
            <Route path="/looknew" component={LookNewComponent}></Route>
            <Route path="/buycar" component={BuyCarComponent}></Route>
            <Route path="/mine" component={MineComponent}></Route>
        </Route>
    </Router>
    </Provider>
,document.getElementById("app"))
