import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import { stepDecrement, stepIncrement } from "../features/resumee/ResumeeSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
function Rotation() {
    const resumee = useAppSelector((state: RootState) => state.resumee)
    const dispatch = useAppDispatch()
    const handleBack = ()=> dispatch(stepDecrement())
    const handleNext = ()=> dispatch(stepIncrement())
  return (
   <>
      
        {
            resumee.step !== undefined ?
            <button onClick={handleBack} className={ `absolute bottom-[45%] -left-20 btn bg-indigo-600 ${resumee.step > 0 ? 'visible' : 'invisible'}`} >
              <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
            </button>:
            null
        }
        {
            resumee.step !== undefined ?
            <button onClick={handleNext} className={` absolute bottom-[45%] -right-20 btn bg-indigo-600 ${resumee.step > 4 ? 'invisible' : 'visible'}`} >
              <FontAwesomeIcon icon={faArrowRight} size="2xl" />
            </button>:
            null
        }
      </>  
    
  )
}

export default Rotation