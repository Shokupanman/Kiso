import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        height: '50vh',
        width: '50vw',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>domo Login</h1>
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" />
        <input type="text" name="" id="" />
      </section>
    </div>
  )
}

export default Login
