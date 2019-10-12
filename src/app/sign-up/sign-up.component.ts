import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      Username: '',
      Password: '',
      Email: '',
      Firstname: '',
      Lastname: ''
    }
  }
  onSubmit(form: NgForm) {
    // let jsonform = JSON.stringify(form.value)
    // console.log(jsonform);
    this.userService.registeruser(form.value)
      .subscribe((data: any) => {
        console.log(data);
        if (data.Succeeded == true) {
          this.resetForm(form);
        }
      },
        (error: any) => console.log(error));
  }
}
