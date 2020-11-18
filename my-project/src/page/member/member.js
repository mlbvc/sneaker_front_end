import React from 'react';
import HeaderPage from '../../component/header/header';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Profile from '../../component/profile/profile';
import Setting from '../../component/setting/setting';
import News from '../../component/news/news';
import Order from '../../component/order/order';
import './member.css';

export const Member = (props) => {
  return (
    <div>
      <HeaderPage {...props}></HeaderPage>
      <div className="operation_list max_font">
        <Link to='/member/profile'>
          <div className="operation_item">资料</div>
        </Link>
        <Link to='/member/setting'>
          <div className="operation_item">设置</div>
        </Link>
        <Link to='/member/news'>
          <div className="operation_item">消息</div>
        </Link>
        <Link to='/member/order'>
          <div className="operation_item">订单</div>
        </Link>
        <Link to='/member/profile'>
          <div className="operation_item">收藏</div>
        </Link>
        <div className="operation_item">购物车</div>
      </div>
      <div className="blank"></div>
      <Route exact path='/member/profile' component={Profile} ></Route>
      <Route exact path='/member/setting' component={Setting} ></Route>
      <Route exact path='/member/news' component={News} ></Route>
      <Route exact path='/member/order' component={Order} ></Route>
      {/* <Route exact path='/member/profile' component={Profile} ></Route> */}
    </div>
  )
}
export default Member;