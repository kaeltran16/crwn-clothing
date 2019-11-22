import React from 'react';
import Spinner from '../components/Spinner/Spinner';

const withSpinner = Component => ({ isLoading, ...otherProps }) => {
   return isLoading ? <Spinner/> : <Component {...otherProps}/>;
};

export default withSpinner;
