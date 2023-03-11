import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-coutry',
  templateUrl: './coutry.component.html',
  styleUrls: ['./coutry.component.css']
})
export class CoutryComponent implements OnInit {

  constructor(private user:UserService) { }


  ngOnInit(): void {

    this.user.getCountries().subscribe(res=>console.log(res))

  }

}
