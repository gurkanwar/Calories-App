import { Component, OnInit } from '@angular/core';
import { Calorie } from './calorie.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.css']
})
export class CalorieComponent implements OnInit {

  contacts: Array<Calorie> = [];
  contactParams: string;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
