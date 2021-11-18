import axios from 'axios';
import {createContext, useContext, useState, useCallback, useEffect} from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext)
}

const DataProvider = ({children}) => {
  const [type, setType] = useState('all');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const [data, setData] = useState([]);

  const url = 'http://localhost:8080/api/apartments';

 const getData = useCallback(
    async () => {
      if(type === 'all' && price === '' && location === '' && keyword === ''){
        setLoading(true)
        try {
          const res = await axios.get(url)
          setData(res.data)
          setLoading(false)
        } catch (error) {
          setErr(error.message)
          setLoading(false)
        }  
      }else{
        setLoading(false)
        try {
          const res = await axios.get(`${url}?q=${keyword}+${type}+${location}+${price}`)
          setData(res.data)
          setLoading(false)
        } catch (error) {
          setErr(error.message)
          setLoading(false)
        }  
      }
    },
    [type, location, price, keyword],
  )

  useEffect(() => {
    getData()
  }, [getData])


  const values = {
    url,
    type,
    price,
    location,
    keyword,
    data,
    loading,
    err,
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