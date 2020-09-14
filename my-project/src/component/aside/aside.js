import React, { useState, useEffect } from 'react';
import { getProductList, getCategoryList} from '../../utils/request'
import './aside.css';

export const Aside = (props) => {
  const [allProductData, setAllProductData] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    getProductList().then((res) => {
      setAllProductData(res.data);
    }).catch((err) => {
      console.log(err);
    })
    getCategoryList().then((res) => {
      setAllCategory(res.data);
    }).catch((err) => {
      console.log(err);
    })
  },[])

  // 点击跳转
  const goDetailPage = (id, product) => {
    props.history.push({
      pathname: '/detail/' + id,
      product_info: product
    })
  }

  // 渲染分类
  const renderCategoryList = () => {
    return (
      <div className="category_list">
        {
          allCategory.map((item, index) => {
            return (
              <div key={index} className="cate_item">{item.category_name}</div>
            )
          })
        }
      </div>
    )
  }

  //渲染产品
  const renderProductList = () => {
    return (
      <div className="product_list">
        {
          allProductData.map((item, index) => {
            return (
              <div key={index} className="product_card" onClick={() => goDetailPage(item.product_id, item)}>
                <div className="product_img">
                  {/* <img src={} alt=''></img> */}
                </div>
                {
                  item.is_on_the_shelf ?
                    <div className="is_new">
                      新品上市
                  </div>
                    : null
                }
                <div className="product_name">{item.product_name}</div>
                <div className="product_name">{item.color}</div>
                <div className="product_price">{'￥' + item.price}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className="container">
      <div className="blank"></div>
      <div className="container_middle">
        <div className="all_product"><h2>所有产品</h2></div>
        <div className="fixed_right">
          <div className="condition">筛选条件</div>
          <div className="sort"> 排序依据</div>
        </div>
      </div>
      <div className="blank"></div>
      <div className="overview">
        {renderCategoryList()}
        {renderProductList()}
      </div>
    </div>
  )
}

export default Aside