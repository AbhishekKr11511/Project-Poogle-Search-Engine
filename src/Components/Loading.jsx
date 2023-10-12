import { RotatingLines } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="loader-container" style={{display : 'flex', justifyContent: 'center' , alignItems: 'center'}}>
    <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}/>
    
    </div>
    
  )
}
export default Loading