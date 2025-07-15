function JsCode(){
  const fullName="Shahid Naeem";
  let age=50;
  let x=20;
  let y=30;
  // function city(){
  //   alert("Lahore");
  function calc(a,b,op){
    if(op=="+"){
      return a+b;
    }else if (op=="-"){
      return a-b;
    }else if (op=="/"){
      return a/b;
    }else {
      return a*b;
    }
  
  }
  const emp={
    empName:"Nighat",
    empSal:45000,
    empEmail:"emp@test.com"
  }
  let Colors=["Red","Green","Blue","Orange","Pink"]
  let myImg="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   return(
<>
    <h1>JavaScript Code in JSX</h1>
     <input type="text" name=""value={emp.empName} id=""/>
     <br /><br />
    <img src={myImg} width="300px"alt="" />
    
    <h2>{fullName} is {age} years old</h2>
    <h2>{fullName?fullName:"User is Invalid"}</h2>
    {/* <h2>{x+y}</h2> */}
    {/* {city ()} */}
    <h2>{calc(40,20,"*")}</h2>
    <h2>{emp.empSal}</h2>
    <h2>Colour:{Colors[4]}</h2>
    
    </>
  )
  }

    
  
 
    
  
export default JsCode;
    
  
    
     
    

