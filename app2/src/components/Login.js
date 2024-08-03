import React,{useState} from 'react'

function Login(props) {
    const [name, setName] = useState('')
  return (
    <div className='form-group'>
          <center>
          <div className='col-md-6'>
              <h2>Login Here</h2>
          <input onChange={(e)=>setName(e.target.value)} className='form-control' type={"text"} placeholder="Enter Your Name"/>
            <br/>
          <button className='btn btn-primary' onClick={()=> props.setLogin(name)}> Login </button>
          </div>
          </center>
      </div>
  )
}

export default Login