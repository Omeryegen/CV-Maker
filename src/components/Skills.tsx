import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import {  changeSkills, addDeleteSkills, changeLangs, addDeleteLangs } from "../features/resumee/ResumeeSlice"

function Skills() {
  const resumee = useAppSelector((state: RootState) => state.resumee)
  const dispatch = useAppDispatch()
  const handleSkillChange = (e: any, index: number) =>{
    dispatch(changeSkills({index:index, data: {[e.target.id]: e.target.value}}))
  }
  const handleSkillClick = (e: any, index: any) =>{
    dispatch(addDeleteSkills({index: index, command: e.target.id, data: {skill: "", skillLevel:50}}))
  }
  const handleLangChange = (e: any, index: number) =>{
    console.log(e.target.value)
    dispatch(changeLangs({index:index, data: {[e.target.id]: e.target.value}}))
  }
  const handleLangClick = (e: any, index: any) =>{
    dispatch(addDeleteLangs({index: index, command: e.target.id, data: {language: "", langLevel:"Beginner"}}))
  }
  console.log(resumee.languages)
  return (
    <div className='container w-full grid grid-cols-2 '>
      <div className='w-5/6 justify-self-center mb-4'>

    {
      resumee.skills !== undefined ? 
      resumee.skills.map((element: any, index) => {
        return (      
            <>
              <input value={element.skill} onChange={(e)=> handleSkillChange(e, index)}  type="text" id="skill" placeholder="Skill" className="input input-sm input-bordered input-primary w-full mb-2" />
              <input value={element.skillLevel} onChange={(e)=> handleSkillChange(e, index)}  type="range" id="skillLevel" placeholder="Level" className="range range-xs  w-full mb-2" />
              <button onClick={(e) => handleSkillClick(e, index)} id="delete" className="btn btn-sm btn-warning text-white  w-full mb-4">
                Delete
              </button>
             
            </>
        )
      }): null
    }
      <button id="add" onClick={(e)=> handleSkillClick(e, null)} className=' w-full  h-10 btn'>Add</button>
      </div>
      <div className='w-5/6 justify-self-center mb-4'>
    {
      resumee.languages !== undefined ? 
      resumee.languages.map((element: any, index) => {
        return (      
            <div>
              <input value={element.language} onChange={(e)=> handleLangChange(e, index)}  type="text" id="language" placeholder="Language" className="input input-sm input-bordered input-primary w-full mb-2" />
              <select onChange={(e)=>handleLangChange(e, index)} id='langLevel' className="select select-bordered mb-2 select-sm w-full max-w-xs">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <button onClick={(e) => handleLangClick(e, index)} id="delete" className="btn btn-sm btn-warning text-white w-full mb-4">
                Delete
              </button>
             
            </div>
        )
      }): null
    }
      <button id="add" onClick={(e)=> handleLangClick(e, null)} className='w-full  h-10 btn'>Add</button>
      </div>
      
  </div>
  )
}

export default Skills