import React, { useState } from 'react'

function LoginForm() {
    const[name,setName]= useState("");
    const[email,setEmail]=useState("");
    const[submitted,setSubmitted] =useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit =(e) }!`);=> {
        e.preventDefault();
        setSubmitted(true);
        setMessage(`Wellcome,${Name},${email

    };
    const style = {
      form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '250px'
      },
      input: {
        padding:  '8px',
        fontSize:  '16px'
      },
      button: {
        padding: '8px',
        backgroundColor:  '#4CAF50',
        color: 'white',
        cursor: 'pointer',
      }
    };
  return (
    <div style={{padding:'20px'}}>

        <h1>Log in Form</h1>
        <form onSubmit={handleSubmit} style={style.form}>
          <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    style={style.input}
                      />
              <input
        type="email"
        placeholder='Email'
        value={email}
      
        onChange={(e) => setEmail(e.target.value)}
        style={style.input}
        />
      <button type='submit' style={style.button}>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default LoginForm;