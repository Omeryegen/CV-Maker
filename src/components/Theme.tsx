import { changeTheme } from "../features/resumee/ResumeeSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import Outcome from "./Outcome"

function Theme() {
  const resumee = useAppSelector((state: RootState) => state.resumee)
  const dispatch = useAppDispatch()
  const handleChange = (e: any) =>{
    dispatch(changeTheme(e.target.value))
  }
  return (
  
    <div className='container w-full grid grid-cols-1 '>
      <div className="w-5/6 justify-self-center mb-4 flex flex-row justify-around">
          <input id='black' value="black" onChange={handleChange} checked={resumee.theme === "black"} type="radio" name="radio-3" className="radio" />
          <input id='purple' value="purple" onChange={handleChange} checked={resumee.theme === "purple"} type="radio" name="radio-3" className="radio radio-primary" />
          <input id="pink" value='pink' onChange={handleChange} checked={resumee.theme === "pink"} type="radio" name="radio-3" className="radio radio-secondary" />
          <input id="blue" value='blue' onChange={handleChange} checked={resumee.theme === "yellow"} type="radio" name="radio-3" className="radio radio-info" />
      </div >
      
    </div>
    
   
  )
}

export default Theme