import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserLogin } from 'src/app/models/userLogin';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm : FormGroup;
  userLogin : UserLogin;
  loginSubmitted : boolean;

  constructor(private fb: FormBuilder,private alrtifyService:AlertifyService,private authService: AuthService,private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      lastName:[null,[Validators.required,Validators.minLength(1)]],
      password:[null,[Validators.required,Validators.minLength(1)]]
    });
  }

  onLogin(){
    //console.log(this.loginForm);
    const user = this.authService.authUser(this.loginForm.value)
    this.loginSubmitted = true;
    if(this.loginForm.valid && user){
      console.log(this.loginData());
      //this.user = Object.assign(this.user,this.registerForm.value);
      //this.userService.addUser(this.loginData());
      localStorage.setItem('token',user.lastName);
      this.alrtifyService.success('Congartilation  : ' + 'Login OK ' + this.lastName.value);
      this.loginForm.reset();
      this.loginSubmitted = false;
      this.router.navigate(['/']);
    // localStorage.setItem('Users',JSON.stringify(this.user));
    }else{
      this.alrtifyService.error('Login NON OK' +' il y des champs qui sont incorrect');
    }
  }

  loginData() : UserLogin {
    return this.userLogin = {
      lastName:this.lastName.value,
      password:this.password.value
    }
  }
   // ------------------------------------------------------------------------------------------------------------------- //
  // ------------------------------------- Getter methode for all form controls ---------------------------------------- //
  // ------------------------------------------------------------------------------------------------------------------- //
  get lastName(){
    return this.loginForm.get('lastName') as FormControl;
  }

  get password(){
    return this.loginForm.get('password') as FormControl;
  }

    // ------------------------------------------------------------------------------------------------------------------- //
}

