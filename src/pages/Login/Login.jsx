import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { login, signup } from '../../firebase'
import netflix_spinner from "../../assets/netflix_spinner.gif"

const Login = () => {
  const[signState, setSignState] = useState("Sign In")

  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[loading, setloading] = useState(false)

  const userAuth = async(e)=>{
    e.preventDefault()
    setloading(true)
    if(signState === "Sign In"){
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
    setloading(false)
  }

  const toggleState = ()=>{
    signState === "Sign In" ? setSignState("Sign Up") : setSignState("Sign In")
  }

  return (
    loading ? <div className='loading-spinner'>
      <img src={netflix_spinner} alt="" />
    </div> :
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" &&
            <input type="text" name="" id="" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          }
          <input type="email" name="" id="" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" name="" id="" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={userAuth} type='submit'>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ?
            <p>Already have account? <span onClick={toggleState}>Sign In Now</span></p>
            : <p>New to Lonestream? <span onClick={toggleState}>Sign Up Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
