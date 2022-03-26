import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Array<any> = [];
  arr: Array<any> = [];


  constructor(private router: ActivatedRoute ,private http: HttpClient) { }
  number: number = 0;
  id: number = 0;
  ngOnInit(): void {
    this.router.params.subscribe(par => {

      this.id = par['idmonhoc'];
      this.number ++;
    })
    console.log(this.id);
    this.http.get<any>("http://localhost:3000/"+this.id)
      .subscribe(data => {
        // this.quiz = data;
        console.log(data.length);
        while(this.arr.length < 10){
          let rand = Math.floor(Math.random() * data.length);
          if(!this.arr.includes(rand)){
            this.quiz.push(data[rand]);
            this.arr.push(rand);
          }
        }
      })
  }

}
