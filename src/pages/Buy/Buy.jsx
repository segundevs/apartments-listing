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
      {loading && <PageLoader/>}
      <div className="buy-container">
        {err && <AuthError component={err} />}
        {data && data.length >= 1 ? data.map(apt => (
          <Card apt={apt} key={apt._id} />
        )) : (!loading && <p className='no_match-err'>No matches found</p>)}  
      </div>
    </React.Fragment>
  )
}

export default Buy
