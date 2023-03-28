
import Create from './pages/Create'
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Outcome from './components/Outcome'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/create' element={<Create/>}/>
      </Routes>
      
      </BrowserRouter>
    </Provider>
    

  )
}

export default App