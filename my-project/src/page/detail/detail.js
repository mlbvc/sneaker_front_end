import React, { useState, useEffect } from 'react';
import Header from '../../component/header/header';
import { getProductList } from '../../utils/request'
import './detail.css'

export const Detail = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  const id = props.match.params.product_id;

  useEffect(() => {
    getProductList({ product_id: id }).then((res) => {
      setProductInfo(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  console.log(props)
  return (
    <div>
      <Header {...props}></Header>
      <div className="blank"></div>
      <div className="product_container max_font">
        <div className="display_product">
          <img className="display_img" alt=''></img>
        </div>
        <div className="product_info">
          <div className="product_title">
            <div>{productInfo.introduction}</div>
            <div>{'￥' + productInfo.price}</div>
          </div>
          <div>
            <h2>{productInfo.product_name}</h2>
          </div>
          <button className="cart">购物车</button>
          <button className="collection">收藏</button>
          <div className="prodcut_desc">{productInfo.description}</div>
        </div>
      </div>
    </div>
  );
}
export default Detail