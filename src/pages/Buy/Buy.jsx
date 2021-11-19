import React from 'react';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import AuthError from '../../components/AuthError/AuthError';
import { useData } from '../../contexts/dataContext';
import './buy.style.scss';
import PageLoader from '../../components/PageLoader';

const Buy = () => {

  const { data, loading, err } = useData();

  return (
    <React.Fragment>
      <h4 className="buy-header">Search for properties...</h4>
      <Search />
      <div className="buy-container">
        {loading && <PageLoader />}
        {err && <AuthError component={err} />}
        {data && data.map(apt => (
          <Card apt={apt} key={apt._id} />
        ))}  
      </div>
    </React.Fragment>
  )
}

export default Buy
