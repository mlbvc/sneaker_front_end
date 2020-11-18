import React from 'react';
import { Layout } from 'antd';
import HeaderPage from '../../component/header/header';
import AsidePage from '../../component/aside/aside';
import FooterPage from '../../component/footer/footer';

export const Main = (props) => {
    return (
      <Layout style={{height: '100%'}}>
        <HeaderPage {...props} />
        <AsidePage {...props}/>
        <FooterPage />
      </Layout>
    )
}
export default Main