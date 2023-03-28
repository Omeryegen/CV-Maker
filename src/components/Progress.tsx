import { useAppSelector } from '../hooks'
import { RootState } from '../store'

function Progress() {
    const resumee = useAppSelector((state: RootState) => state.resumee)
    const string = (resumee.step * 20).toString()
  return (
    <div className=' w-2/4 mt-16'>
        <div className='w-100 relative rounded-full bg-indigo-300 h-8'>
          <div style={{width: `${string}%`}} className={`absolute transition-all duration-500  rounded-full bg-indigo-600 h-full left-0 bottom-0`}>
          </div>
          <p className='absolute left-[50%] text-white top-0.5'>%{string}</p>
        </div>
    </div>
  )
}

export default Progress