import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm : FormGroup;
  user: User;
  userSubmitted : boolean;

  constructor(private fb: FormBuilder,private userService: UserService,private alrtifyService:AlertifyService) { }

  ngOnInit() {
    // this.registerForm = new FormGroup({
    //   lastName:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   firstName:new FormControl(null,Validators.required),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword:new FormControl(null,[Validators.required]),
    //   phone:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },this.passwordComparaisonValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registerForm = this.fb.group({
      lastName:[null,[Validators.required,Validators.minLength(1)]],
      firstName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(1)]],
      confirmPassword:[null,Validators.required],
      phone:[null,[Validators.required,Validators.maxLength(10)]]
    },{validators: this.passwordComparaisonValidator});
  }

  passwordComparaisonValidator(fg : FormGroup) : Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched:true};
  }

  onSubmit(){
    console.log(this.registerForm);
    this.userSubmitted = true;
    if(this.registerForm.valid){
      //this.user = Object.assign(this.user,this.registerForm.value);
      this.userService.addUser(this.userData());
      this.registerForm.reset();
      this.userSubmitted= false;
      this.alrtifyService.success('Congartilation,yes id done');

    // localStorage.setItem('Users',JSON.stringify(this.user));
    }else{
      this.alrtifyService.error('il y des champs qui sont incorrect');
    }
  }


  userData(): User{
    return this.user = {
      lastName:this.lastName.value,
      firstName:this.firstName.value,
      email:this.email.value,
      password:this.password.value,
      phone:this.phone.value
    }
  }

  // ------------------------------------------------------------------------------------------------------------------- //
  // ------------------------------------- Getter methode for all form controls ---------------------------------------- //
  // ------------------------------------------------------------------------------------------------------------------- //
  get lastName(){
    return this.registerForm.get('lastName') as FormControl;
  }

  get firstName(){
    return this.registerForm.get('firstName') as FormControl;
  }

  get email(){
    return this.registerForm.get('email') as FormControl;
  }

  get password(){
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get phone(){
    return this.registerForm.get('phone') as FormControl;
  }

    // ------------------------------------------------------------------------------------------------------------------- //
}
