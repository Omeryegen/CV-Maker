import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <div className='w-full min-h-screen bg-indigo-300' >
        <svg className='absolute top-0 left-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#5000ca" fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,208C480,192,600,192,720,202.7C840,213,960,235,1080,250.7C1200,267,1320,277,1380,282.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-vector/blue-curriculum-vitae-template_23-2148812835.jpg?w=740&t=st=1679940666~exp=1679941266~hmac=4e506141420f62b8916dee1dedca5ab0651faff1dddb1f04c36afffcf3d21019" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Design Your Future</h1>
                <p className="py-6">You can create stylish cv's within a minute. All you need to do is clicking button below! </p>
                <Link to='/create' className="btn btn-primary">Create Your CV</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage