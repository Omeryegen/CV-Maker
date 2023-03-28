
import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import Modal from "../components/Modal";
import Rotation from "../components/Rotation";
import Personal from "../components/Personal";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Theme from "../components/Theme";
import Socials from "../components/Socials";
import Outcome from "../components/Outcome";
import Progress from "../components/Progress";
import { changeStep } from "../features/resumee/ResumeeSlice";

function Create() {
  const resumee = useAppSelector((state: RootState) => state.resumee)
  const dispatch = useAppDispatch()
  const steps = ["Personal", "Education", "Experience", "Skills&Languages", "Socials", "Theme"]
  const modals = [<Personal/>, <Education/>, <Experience/>, <Skills/>, <Socials/>, <Theme/>]
  const handleClick = (e: any, index: number) => {
    dispatch(changeStep(index))
  }
  return (
    <div className="w-full min-h-screen flex flex-col  items-center bg-indigo-400 ">
      
      <Progress/>
      <Modal>
        <div className="w-full flex justify-around flex-wrap font-bold border-b mb-8 ">
          {
            steps.map((element, index) => 
            <p onClick={(e)=> handleClick(e, index)} className={`px-4 text-fuchsia-800 cursor-pointer py-4 flex flex-row ${resumee.step === index && 'border-b-4'} border-indigo-400`} > {element}</p>
            )
          }
        </div>
        {
          resumee.step !== undefined ? modals[resumee.step] : null
        }
        <Rotation/>
      </Modal>
     
      {
        resumee.step === steps.length-1 && <div className="w-2/4 mb-4"><Outcome/></div>
      }
      {
        resumee.step === steps.length-1 && 
        <iframe style={{height: 800}}  className="w-2/4 mb-4n"   src={resumee.url+'#view=fitHs&toolbar=0'}/>
      }
   
      
    </div>
  )
}

export default Create