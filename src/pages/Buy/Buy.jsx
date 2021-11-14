import React, {useEffect} from 'react';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';

import { useData } from '../../contexts/dataContext';

import './buy.style.scss';

const Buy = () => {

  const {data, getData} = useData();

  useEffect(()=>{
    getData()
  }, [getData])
  
  return (
    <React.Fragment>
      <h4 className="buy-header">Search for properties...</h4>
      <Search />
      <div className="buy-container">
        {data && data.map(apt => (
          <Card apt={apt} key={apt._id} />
        ))}  
      </div>
    </React.Fragment>
  )
}

export default Buy
