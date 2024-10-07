import React from 'react'
import BrowseCharacters from './components/BrowseCharacters'
import UserList from './components/UserList'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import UserDetail from './components/UserDetail'
import CharacterDetails from './components/CharacterDetails'
import Comics from './components/Comics'


const App = () => {

  return (
    <>
    <NavBar />

    {/* Routes */}

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/BrowseCharacters' element={<BrowseCharacters/>} />
    <Route path='/CharacterDetails' element={<CharacterDetails/>} />
    <Route path='/Comics' element={<Comics/>} />


    <Route path='/axios-users' element={<UserList/>}/>

    <Route path='/axios-users/:id' element={<UserDetail/>} />


   {/* Error Handling. for url that are not found. */}
    <Route path='*' element={<NotFound/>} />

    </Routes>
    
    </>  
    
  )
}

export default App 
