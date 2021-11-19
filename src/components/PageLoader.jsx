import { Circles } from 'react-loading-icons';

const PageLoader = () => {
  return (
    <div style={{ marginLeft: '33vw', marginTop: '100px'}}>
      <Circles 
      stroke='hsl(167, 98%, 19%)' 
      fill='hsl(167, 98%, 19%)'
      width='50'
      height='3em'/>
    </div>
  )
}

export default PageLoader
