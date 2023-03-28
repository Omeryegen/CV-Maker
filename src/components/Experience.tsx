
import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import {  changeExperience, addDeleteExperience } from "../features/resumee/ResumeeSlice"

function Experience() {
  const resumee = useAppSelector((state: RootState) => state.resumee)
  const dispatch = useAppDispatch()
  const handleChange = (e: any, index: number) =>{
    dispatch(changeExperience({index:index, data: {[e.target.id]: e.target.value}}))
  }
  const handleClick = (e: any, index: any) =>{
   dispatch(addDeleteExperience({index: index, command: e.target.id, data: {company:"", position:"", start:"", end:""}}))
  }
 
  return (
    <div className='container w-full grid grid-cols-2 '>
    {
      resumee.experience !== undefined ? 
      resumee.experience.map((element: any, index) => {
        return (
          <>
            <div className='w-5/6 justify-self-center mb-4'>
              <input value={element.company} onChange={(e)=> handleChange(e, index)}  type="text" id="company" placeholder="Company" className="input input-bordered input-primary w-full mb-2" />
              <input value={element.position} onChange={(e)=> handleChange(e, index)}  type="text" id="position" placeholder="Position" className="input input-bordered input-primary w-full mb-2" />
              <div className="mb-2 w-full flex justify-between">
                <input value={element.start} onChange={(e)=> handleChange(e, index)}  type="date" id="start" placeholder="Start" className="input input-bordered input-primary  " />
                <input value={element.end}  onChange={(e)=> handleChange(e, index)}  type="date" id="end" placeholder="End" className="input input-bordered input-primary  " />
              </div>
              
              <button onClick={(e) => handleClick(e, index)} id="delete" className="btn w-full btn-warning text-white">
                Delete
              </button>
            </div>
           
          </>
        )
      }): null
    }
      <div  className='w-full col-span-2 justify-self-center px-6 mb-4'>
        <button id="add" onClick={(e)=> handleClick(e, null)} className='w-full h-10 btn'>Add</button>
      </div>
      
  </div>
  )
}

export default Experience