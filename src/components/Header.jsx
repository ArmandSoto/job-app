import React from 'react'

const Header = () => {
  return (
    <header className="flex p-4">
        <img src="../assets/react.svg" />
        <div className="flex space-x-4 ml-auto">
            <button>Sign In</button>
            <button>Register</button>
        </div>
    </header>
  )
}

export default Header