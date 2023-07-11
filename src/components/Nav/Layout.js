import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Head = (props) => {
  return (
    <Fragment>
      <MainHeader />
      
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Head;
