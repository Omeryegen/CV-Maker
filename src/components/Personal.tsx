
import { useAppDispatch, useAppSelector } from "../hooks"
import { RootState } from "../store"
import { changeInputValue, changeImage } from "../features/resumee/ResumeeSlice"

function Personal() {
  const resumee = useAppSelector((state: RootState) => state.resumee)
  const dispatch = useAppDispatch()
  const imageChange = (e: any) =>{
    dispatch(changeImage(URL.createObjectURL(e.target.files[0])))
   
  }
  const handleChange = (e:any)=>{
    console.log(e.target.value)
    dispatch(changeInputValue({[e.target.id]: e.target.value }))
  }
  
  return (
    <div className='container w-full grid grid-cols-2 mb-8 grid-rows'>
      <div className='w-5/6 justify-self-center mb-4 row-span-3 '>
        <div className="avatar w-full flex justify-center mb-4">
          <div className="w-32 rounded">
            <img src={resumee.image.length > 1 ?  resumee.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
          </div>
        </div>
        <input  onChange={imageChange} type="file" className="file-input file-input-bordered w-full max-w-xs" />
       </div>
       <div className='w-5/6 justify-self-center mb-4'>
        <input  onChange={handleChange} value={resumee.contact.name} type="text" id="name" placeholder="Name" className="input input-bordered input-primary w-full" />
       </div>
       <div className='w-5/6 justify-self-center mb-4'>
        <input onChange={handleChange} value={resumee.contact.surname} type="text" id="surname" placeholder="Surname" className="input input-bordered input-primary w-full" />
       </div>
       <div  className='w-5/6 justify-self-center mb-4'>
        <input onChange={handleChange} value={resumee.contact.birthday} type="date" id="birthday" placeholder="Birthday" className="input input-bordered input-primary w-full" />
       </div> 
       <div className='w-5/6 justify-self-center mb-4'>
       <input onChange={handleChange} value={resumee.contact.adress} type="text" id="adress" placeholder="Adress" className="input input-bordered input-primary w-full" />
       </div>
       
       <div className='w-5/6 justify-self-center mb-4'>
        <input onChange={handleChange} value={resumee.contact.occupation} type="text" id="occupation" placeholder="Occupation" className="input input-bordered input-primary w-full" />
       </div>
       <div className='w-5/6 justify-self-center'>
        <input onChange={handleChange} value={resumee.contact.email} type="text" id="email" placeholder="Email" className="input input-bordered input-primary w-full" />
       </div>
       <div className='w-5/6 justify-self-center mb-4'>
        <input onChange={handleChange} value={resumee.contact.phone} type="text" id="phone" placeholder="Phone" className="input input-bordered input-primary w-full" />
       </div>
    </div>
  )
}

export default Personal