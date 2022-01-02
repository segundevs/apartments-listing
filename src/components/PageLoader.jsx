import { ThreeDots } from 'react-loading-icons';

const PageLoader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px'}}>
      <ThreeDots
      margin='2em'
      stroke='hsl(167, 98%, 19%)' 
      fill='hsl(167, 98%, 19%)'
      width='50'
      height='3em'/>
    </div>
  )
}

export default PageLoader
