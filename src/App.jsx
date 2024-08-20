import { useState } from 'react'
import './App.css'
import { Button } from "./components/ui/button";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from '@clerk/clerk-react';
import Header from './components/custom/header';
function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded,isSignedIn} = useUser();

  if (!isSignedIn&&isLoaded) {
    return <Navigate to = {'/auth/sign-in'}/>
  }
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default App 
