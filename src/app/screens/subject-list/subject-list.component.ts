import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subject: Array<any> = [];
  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/subjects")
      .subscribe(data => {
        this.subject = data;
        console.log(this.subject);
        
      })
      
  }

}
