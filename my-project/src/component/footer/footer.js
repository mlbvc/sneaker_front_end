import React from 'react';
import './footer.css';

export const FooterPage = (props) => {
  return (
    <div className="footer">
      <div className="footer_list">
        <div className="footer_item">
          <ul>
            <li>电子礼品卡</li>
            <li>企业团购</li>
            <li>附近商店</li>
            <li>注册Nike会员</li>
            <li>向我们反馈</li>
          </ul>
        </div>
        <div className="footer_item">
          <ul>
            <li>获得帮助</li>
            <li>订单状态</li>
            <li>配送方式</li>
            <li>退换货</li>
            <li>联系我们</li>
          </ul>
        </div>
        <div className="footer_item">
          <ul>
            <li>关于Nike</li>
            <li>新闻</li>
            <li>投资者</li>
            <li>新品预览</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">

      </div>
    </div>
  );
}
export default FooterPage