import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input('herodata') heroData: any;
  @Output('removeHero') removeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  remove(){
    this.removeEvent.emit(this.heroData);
  }

}
