
import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import { addDeleteSocials, changeSocials,summaryChange  } from "../features/resumee/ResumeeSlice"

function Socials() {
  const resumee = useAppSelector((state: RootState) => state.resumee)
  const dispatch = useAppDispatch()
  const handleChange = (e: any, index: number) =>{
    dispatch(changeSocials({index:index, data: {[e.target.id]: e.target.value}}))
  }
  const handleClick = (e: any, index: any) =>{
    dispatch(addDeleteSocials({index: index, command: e.target.id, data: {platform: "", link:""}}))
  }
  const changeSummary = (e: any) =>{
    dispatch(summaryChange(e.target.value))
  }
  console.log(resumee.socials)
  return (
    <div className='container w-full grid grid-cols-2 '>
      
    {
      resumee.socials !== undefined ? 
      resumee.socials.map((element: any, index) => {
        return (
          <>
            <div className='w-5/6 justify-self-center mb-4'>
              <input value={element.platform} onChange={(e)=> handleChange(e, index)}  type="text" id="platform" placeholder="Platform" className="input input-bordered input-primary w-full mb-2" />
              <input value={element.link} onChange={(e)=> handleChange(e, index)}  type="text" id="link" placeholder="Link" className="input input-bordered input-primary w-full mb-2" />
              <button onClick={(e) => handleClick(e, index)} id="delete" className="btn btn-warning w-full  text-white">
                Delete
              </button>
            </div>
           
          </>
        )
      }): null
    }
    <div className="col-span-2 w-[90%] justify-self-center mb-4">
        <textarea value={resumee.summary} onChange={changeSummary} className="w-full textarea textarea-primary" placeholder="Summary"/>
      </div>
      <div  className='w-full col-span-2 justify-self-center px-6 mb-4'>
        <button id="add" onClick={(e)=> handleClick(e, null)} className='w-full h-10 btn'>Add</button>
      </div>
      
  </div>
  )
}

export default Socials