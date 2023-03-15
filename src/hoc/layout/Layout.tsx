import { checkAuth } from '@/redux/redusers/userReduser';
import { FC, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/header/Header';


const Layout: FC<any> = ({ children }: any) => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [])

    return (
      <Fragment>
        <Header/>
        {children}
        {/* <Footer /> */}
      </Fragment>
    );
};

export default Layout;