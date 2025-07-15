import React from 'react'
import EmpCards from './EmpCards';

function TableAndArray() {
    const empInfo=[
       



        {
            id:'1',
            name:'Zahid',
            age:'27',
            salary:50000,
            email:'Zahid@gmail.com'
        },
        {
            id:'2',
            name:'Sahid',
            age:'26',
            salary:80000,
            email:'Sahid@gmail.com'
        },
       
        {
            id:'3',
            name:'Asad',
            age:'20',
            salary: 40000,
            email: 'Asad@gmail.com'
        },
       
        {
            id:'4',
            name:'Saad',
            age:'30',
            salary:60000,
            email:'Saad@gmail.com'
        },
        {
            id:'5',
            name:'Arsalan',
            age:'35',
            salary:45000,
            email:'arsalan@gmail.com'
        },
       
        {
            id:'6',
            name:'Subhan',
            age:'45',
            salary:16000,
            email:'subhan@gmail.com'
        },
       
        {
            id:'7',
            name:'Hashir',
            age:'42',
            salary:19000,
            email:'Hashir@gmail.com'
        },
       
        {
            id:'8',
            name:'Abdullah',
            age:'48',
            salary:16000,
            email:'Abdullah@gmail.com'
        },
       
        {
            id:'9',
            name:'Faiq',
            age:'35',
            salary:18000,
            email:'Faiq@gmail.com'
        },
       
        {
            id:'10',
            name:'Moiz',
            age:'25',
            salary:26000,
            email:'Moiz@gmail.com'
        },
       
       
       
    ];

  return (
    <div>
        <h1> Array Data With Props</h1>
        {
            empInfo.map((user)=>(
                <div key={user.id}>
              <EmpCards data={user}/> 
              </div>

            ))
        }
        
        
    </div>
  )
}

export default TableAndArray;