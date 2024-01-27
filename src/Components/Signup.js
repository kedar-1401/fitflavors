import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("user already exist,please go to login")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
    
    
    const obj={
        textAlign:"left",
        paddingLeft:"35%",
        paddingRight:"35%",
        paddingTop:"15%"
  }

    return (
        <div className="signup" style={obj}>
            <h1>FITFLAORS</h1>

            <h2>Signup</h2>

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
      <br />
      <p>Already have an Account ? <Link style={{textDecoration:"none"}} to="/login">Log in</Link></p>
      

        </div>
    )
}

export default Login