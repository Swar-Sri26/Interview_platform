import './App.css'
import { Show, SignInButton, SignUpButton, UserButton,SignOutButton } from '@clerk/react'
function App() {
  

  return (
    <>
    <header>
        <Show when="signed-out">
          <SignInButton></SignInButton>
          <button>click me to signIn</button>
          <SignUpButton />
        </Show>
        <Show when="signed-in">
         <SignOutButton/>
         
        </Show>
         <UserButton />
      </header>
      
    </>
  )
}

export default App
