import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  listSubjects = [
    {
      id: 1,
      name: "front end framework"
    },
    {
      id: 2,
      name: "Laravel"
    },
    {
      id: 3,
      name: "PHP2"
    }
  ]
  ngOnInit(): void {
  }

}
