import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/views/index/Index'
import Notfound from './components/common/404'


function App() {

  return (
    <BrowserRouter basename="/mvp_ibero">
      <Routes>
        
        <Route
          path={`/:auth`} element={
            <Fragment>
              <Index path='home' />
            </Fragment>
            
          }
          
        />
        <Route path='*'
          element={
            <Fragment>
              <Notfound />
            </Fragment>
          } 
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
