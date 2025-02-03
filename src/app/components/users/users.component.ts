import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userData: any[] = [];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      if (response) {
        console.log('response--->', response)
        this.userData = response;
      }
    })
  }

  deleteUser(data: any) {
    this.userService.deleteUser(data.id).subscribe((response) => {
      console.log('User deleted');
      this.getUsers();
    })
  }

}
