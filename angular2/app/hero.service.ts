import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Level } from './domain/level';
import { Customer } from './domain/customer';
import { HEROES } from './mock-heroes';
import { LEVELS } from './mock-levels';


@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
   }
   
   getLevels(): Promise<Level[]> {
		return Promise.resolve(LEVELS);
   }
   
   
}