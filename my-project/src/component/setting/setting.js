import React from 'react';
import { Form, Input, Radio, Button } from 'antd'
import { Link } from 'react-router-dom';
import * as Res from '../../resRoot'
import './setting.css';

const Setting = () => {
  return (
    <div className="setting_page max_font">
      <div className="setting_title">
        <h2>设置</h2>
      </div>
      <div className="setting_container">
        <div className="left_list">
          <Link>
            <div className="left_item">
              <div className="left_img">
                <img src={Res.settingActive} alt="" className="icon" />
              </div>
              <div>
                账户
              </div>
            </div>
          </Link>
          <Link>
            <div className="left_item">
              <div className="left_img">
                <img src={Res.addressActive} alt="" className="icon" />
              </div>
              <div>
                地址
              </div>
            </div>
          </Link>
          <Link>
            <div className="left_item">
              <div className="left_img">
                <img src={Res.settingActive} alt="" className="icon" />
              </div>
              <div>
                其他
              </div>
            </div>
          </Link>
        </div>
        <div className="setting_account">
          <div>
            <h2>账户设置</h2>
          </div>
          <div>
            <Form
              // form={form}
              // name="basic"
              // onFinish={onRegisterFinish}
              // onFinishFailed={onRegisterFinishFailed}
              >
              <Form.Item
                label="姓名"
                name="name">
                <Input placeholder=""/>
              </Form.Item>
              <Form.Item
                label="邮箱"
                name="email">
                <Input />
              </Form.Item>
              <Form.Item
                label="性别"
                name="sex">
                <Radio.Group
                  >
                  <Radio value={1}>
                    男
                  </Radio>
                  <Radio value={2}>
                    女
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </Form.Item>
            </Form>
          </div>
          {/* <Route exact path='/member/setting/address' component={Order} ></Route> */}
        </div>
      </div>
    </div>
  )
}

export default Setting;