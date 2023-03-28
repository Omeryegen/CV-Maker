

function Modal({children}: any) {
  return (
    <div className='relative container w-3/6 bg-white rounded shadow-xl shadow-indigo-500 my-8'>
        {
            children
        }
    </div>
  )
}

export default Modal