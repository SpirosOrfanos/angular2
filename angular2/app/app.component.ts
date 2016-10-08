import { Component } from '@angular/core';
import { Hero } from './hero';
import { Level } from './domain/level';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
/*const HEROES: Hero[] = [
];*/
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
	
	<ul class="heroes">
      <li *ngFor="let level of levels">
        <span class="badge">{{level.id}}</span> {{level.name}}
      </li>
    </ul>
	
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
   providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  levels: Level[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  getLevels(): void {
    this.heroService.getLevels().then(levels => this.levels = levels);
  }
  
  ngOnInit(): void {
    this.getHeroes();
	this.getLevels();
	console.log(this.heroes);
	console.log(this.levels);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
