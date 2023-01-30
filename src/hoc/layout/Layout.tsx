import { FC, Fragment, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Footer from '@/components/footer/Footer';
import Header from '../../components/header/Header';
// import Menu from '@/admin/menu/Menu';
// import styles from './styles/layout.module.sass';

const Layout: FC<any> = ({ children }: any) => {

    return (
      <Fragment>
        <Header/>
        {children}
        {/* <Footer /> */}
      </Fragment>
    );
};

export default Layout;