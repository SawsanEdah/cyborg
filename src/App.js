import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import {Container} from './components/index'
import {Header,Footer} from './sections/index'
import {Home, Profile} from './Pages/index'

const App=()=>{
    return(
        <>

       <BrowserRouter>
            <Header/>
                <Container>
                   <Routes>
                           <Route path='/' element={<Home/>}/>
                           <Route path='/profile' element={<Profile/>}/>
                   </Routes>
                </Container>
                <Footer/>
       </BrowserRouter>
        </>
    )
}

export default App;