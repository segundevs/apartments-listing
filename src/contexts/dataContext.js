import {createContext, useContext, useState, useCallback} from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext)
}

const DataProvider = ({children}) => {


  const [type, setType] = useState('all');
  const [price, setPrice] = useState('all');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');

  const [data, setData] = useState([]);

  const getData = useCallback(
    () => {
      fetch( `http://localhost:8080/api/apartments?q=${keyword}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err.message))    
    },
    [keyword],
  )


  const values = {
    type,
    price,
    location,
    keyword,
    data,
    setType,
    setPrice,
    setLocation,
    setKeyword,
    setData,
    getData
  }

  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;