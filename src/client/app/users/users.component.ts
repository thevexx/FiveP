import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get<any>('/user/users').subscribe((res) => {
      this.users = res;
    });
  }

}
