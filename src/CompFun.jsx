
import './App.css'
import Compfun from  './CompFun'

function CompFun() {
alert (sum());
  return (
    <>
      <h2>Functional Components Tutorial</h2>
      <h2>Learn with Shahid Naeem</h2>
      
       <Provinces />
       <City/>
    </>
  );
}

function Provinces() {
  return (
    <>
      <h3>Punjab</h3>
      <h3>Sindh</h3>
      <h3>KPK</h3>
      <h3>Balochistan</h3>
    </>
  );
}
function City(){
  return(
    <div>
      <h3>Lahore</h3>
      <h3>Karachi</h3>
      <h3>Peshawer</h3>
      <h3>Multan</h3>
      <h3>Gujrat</h3>
    </div>
  )


  }
    function sum(){
    return(
      5*5
    )
    }
    
export default CompFun;
