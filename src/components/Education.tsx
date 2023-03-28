
import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import { changeEducation, addDeleteEducation } from "../features/resumee/ResumeeSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
function Education() {
  const resumee = useAppSelector((state: RootState) => state.resumee)
  const dispatch = useAppDispatch()
  const handleChange = (e: any, index: number) =>{
    dispatch(changeEducation({index: index, data: {[e.target.id]: e.target.value}}))
  }
  const handleClick = (e: any, index: any) =>{
   dispatch(addDeleteEducation({command: e.target.id, data: {university: "", department: "", start: "", end: "",}, index: index}))
  }
  console.log(resumee.education)
  return (
    <div className='container w-full grid grid-cols-2 '>
      {
        resumee.education !== undefined ? 
        resumee.education.map((element: any, index) => {
          return (
            <>
              <div className='w-5/6 justify-self-center mb-4'>
                  <input value={element.university} onChange={(e)=> handleChange(e, index)}  type="text" id="university" placeholder="University" className="input input-bordered input-primary w-full mb-2" />
                  <input value={element.department} onChange={(e)=> handleChange(e, index)}  type="text" id="department" placeholder="Department" className="input input-bordered input-primary w-full mb-2" />
                <div className="mb-2 w-full flex justify-between">
                  <input value={element.start} onChange={(e)=> handleChange(e, index)}  type="date" id="start" placeholder="Start" className="input input-bordered input-primary " />
                  <input value={element.end}  onChange={(e)=> handleChange(e, index)}  type="date" id="end" placeholder="End" className="input input-bordered input-primary " />
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

export default Education