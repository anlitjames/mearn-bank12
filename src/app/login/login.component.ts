import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property/variable
  header="Welcome To Our Bank"
  accPlaceholder="Account Please"
  //acno
accno=''
//password
pswd=''
  //database
  database:any={
    1000:{accno:1000,username:'anlit',password:2001,balance:1000},
    1001:{accno:1001,username:'anna',password:2002,balance:2000},
    1002:{accno:1002,username:'anet',password:2003,balance:3000}
  }

  constructor() { }

  ngOnInit(): void {
  }

//user define function
accnoChange(event:any)
{
  this.accno=event.target.value
  console.log(this.accno);
  
}
pswdChange(event:any)
{
  this.pswd=event.target.value
  console.log(this.pswd);
  
}
login(){
 var accno=this.accno
  
 var  pswd=this.pswd
  
  let userDetails =this.database
  if( accno  in userDetails)
  {
    if(pswd==userDetails[accno]['password'])
    {
      alert('Login Succesful')
    }
    else{
      alert('Incorrect password')
    }

  }
  else{
    alert('User does not exist')
  }
}
}
