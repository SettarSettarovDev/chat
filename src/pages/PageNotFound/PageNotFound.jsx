import './PageNotFound.styles.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const PageNotFound = () => {
  return (
    <Fragment>
      <div>Page not found</div>
      <Link to="/">Home Page</Link>
    </Fragment>
  );
};

export default PageNotFound;
