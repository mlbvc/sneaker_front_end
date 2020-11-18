import React, { useState, useEffect } from 'react';
import HeaderPage from '../../component/header/header'
import { getProductList } from '../../utils/request'

const CartPage = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    getProductList({ product_id: id }).then((res) => {
      setProductInfo(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <HeaderPage {...props}></HeaderPage>
      <div>
        {productInfo.product_name}
      </div>
    </div>
  )
}

export default CartPage