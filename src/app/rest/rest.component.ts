import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.html']
})

export class restComponent implements OnInit {

  protected title = 'app';
 // protected users$: Observable<IUser[]>;
users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
 console.log(this.users$);

    });

  }
}