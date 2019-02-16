import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/Hero'
import { HEROES } from '../mockData/mockHeros'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
