import React from 'react';
import Header from '../../component/header/header'
import Aside from '../../component/aside/aside';
// import Footer from '../../component/footer/footer';

export const Main = (props) => {
    return (
      <div>
        <Header {...props} />
        <Aside {...props}/>
        {/* <Footer /> */}
      </div>
    )
}
export default Main