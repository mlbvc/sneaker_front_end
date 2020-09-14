import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Popover } from 'antd';
import * as Res from '../../resRoot';
import { setToken, getToken, clearToken } from '../../utils/auth';
import { userLogin, userRegister, getParentList } from '../../utils/request';
import "./header.css";

export const Header = (props) => {
  console.log(props)
  const [hover, setHover] = useState(false);
  const [isClickLogin, setIsClickLogin] = useState(false);
  const [isClickRegister, setIsRegister] = useState(false);
  const [parentList, setParentList] = useState([]);
  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();
  const content = (
    <div>
      <p onClick={() => toUserCenter()}>个人中心</p>
      <p>我的订单</p>
      <p>收藏</p>
      <p>消息</p>
      <p>设置</p>
      <p onClick={() => loginOut()}>注销</p>
    </div>
  );
  let user = getToken();
  useEffect(() => {
    getParentList().then((res) => {
      setParentList(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  //弹出登陆页面
  const popUpLogin= () => {
    setIsClickLogin(true);
    setIsRegister(false);
  }

  //弹出注册页面
  const popUpRegister = () => {
    setIsRegister(true);
    setIsClickLogin(false);
  }

  //表单登录成功回调
  const onLoginFinish = values => {
    userLogin(values)
    .then((res) => {
      console.log(res);
      if(res.code === 2006){
        message.error(res.message);
      }else{
        message.success('登录成功');
        console.log(res.user.username);
        setToken(res.user.username);
        setIsClickLogin(false);
        props.history.replace({
          pathname: '/'
        });
      }
    }).catch((err) => {
      console.log(err);
    })
    console.log('Success11:', values);
  };


  //表单登录失败回调
  const onLoginFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  //表单注册成功回调
  const onRegisterFinish = values => {
    userRegister(values).then((res) => {
      console.log(res);
      if(res.code === 2002){
        message.error(res.message);
      }else{
        message.success('注册成功');
        setIsClickLogin(true);
        setIsRegister(false);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  //表单注册失败回调
  const onRegisterFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  //退出登录
  const loginOut = () => {
    console.log('clearToken');
    clearToken('username');
  }

  const toUserCenter = () => {
    props.history.push({
      pathname: '/member'
    })
  }

  //渲染多级列表
  const renderHoverPage = () => {
    return (
      hover && <div className="hover_page"
        onMouseEnter={() => { setHover(true) }}
        onMouseLeave={() => { setHover(false) }}>
        <div className="hover_page_inner">
          <ul className="hover_page_ul">
            <li>精选推荐</li>
            <li className="hover_page_li">1</li>
            <li className="hover_page_li">1</li>
          </ul>
          <ul className="hover_page_ul">
            <li className="hover_page_li">1</li>
            <li className="hover_page_li">1</li>
          </ul>
          <ul className="hover_page_ul">
            <li className="hover_page_li">1</li>
            <li className="hover_page_li">1</li>
          </ul>
          <ul className="hover_page_ul">
            <li className="hover_page_li">1</li>
            <li className="hover_page_li">1</li>
          </ul>
        </div>
        <div className="mask"></div>
      </div>
    )
  }

  //渲染登陆页面
  const renderLoginPage = () => {
    return (
      isClickLogin &&
      <div>
        <div className="login_page">
        </div>
        <div className="login_container">
          <div className="close_btn">
            <img src={Res.closeBtn} alt='' onClick={()=>{setIsClickLogin(false)}}></img>
          </div>
          <div className="login_inner">
            <div className="login_title">
              <h1>登陆账号</h1>
            </div>
            <Form
              form={loginForm}
              name="basic"
              onFinish={onLoginFinish}
              onFinishFailed={onLoginFinishFailed}
            >
              <Form.Item
                name="username"
                label=""
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              >
                <Input className="login_input" placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                label=""
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ]}
              >
                <Input.Password className="login_input" placeholder="密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit"
                  className="login_button">
                  登录
                </Button>
              </Form.Item>
            </Form>
            <div className="login_tips" onClick={() => popUpRegister()}>还不是会员,加入我们</div>
          </div>
        </div>
      </div>
    )
  }

  //渲染注册页面
  const renderRegisterPage = () => {
    return (
      isClickRegister &&
      <div>
        <div className="login_page">
        </div>
        <div className="login_container">
          <div className="close_btn">
            <img src={Res.closeBtn} alt='' onClick={()=>{setIsRegister(false)}}></img>
          </div>
          <div className="login_inner">
            <div className="login_title">
              <h1>注册账号</h1>
            </div>
            <Form
              form={registerForm}
              name="basic"
              onFinish={onRegisterFinish}
              onFinishFailed={onRegisterFinishFailed}
            >
              <Form.Item
                name="username"
                label=""
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              >
                <Input className="login_input" placeholder="用户名" />
              </Form.Item>

              <Form.Item
                name="password"
                label=""
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ]}
              >
                <Input.Password className="login_input" placeholder="密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit"
                  className="login_button">
                  注册
                </Button>
              </Form.Item>
            </Form>
            <div className="login_tips" onClick={() => popUpLogin()}>已有账号</div>
          </div>
        </div>
      </div>
    )
  }

  //渲染header组件
  return (
    <div>
      <div className="top_fixed min_font">
        <div className="top_fixed_text">帮助</div>
        <div className="top_fixed_text">立即加入</div>
        {
          user ? 
          <Popover
            content={content}
          >
            <div className="top_fixed_text" >
              {user}
            </div>
          </Popover>
          :<div className="top_fixed_text" onClick={() => popUpLogin()}>登录</div>
        }
      </div>
      {/* <div className={styles.top_fixed}>
          <div className={styles.top_fixed_text}>帮助</div>
          <div className={styles.top_fixed_text}>|</div>
          <div className={styles.top_fixed_text}>立即加入</div>
          <div className={styles.top_fixed_text}>|</div>
          <div className={styles.top_fixed_text}>登录</div>
        </div> */}
      <div className='nav'>
        <div className="nike_img">
          <svg height="60px" width="60px" fill="#111" viewBox="0 0 69 32">
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z">
            </path>
          </svg>
        </div>
        <ul className='nav_ul'>
          {
            parentList.map((item, index) => {
              return (
                <li onMouseEnter={() => { setHover(true) }}
                  onMouseLeave={() => { setHover(false) }}
                  key={index} className='nav_li'>
                  {/* <a href=""> */}
                    {item.parent_name}
                  {/* </a> */}
                </li>
              )
            })
          }
        </ul>
        <div className="nav_search">
          <input type="search" placeholder="搜索"></input>
        </div>
      </div>
      {renderHoverPage()}
      <div className="banner"></div>
      {renderLoginPage()}
      {renderRegisterPage()}
    </div>
  )
}

export default Header