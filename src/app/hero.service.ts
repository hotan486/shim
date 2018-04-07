import { Injectable } from '@angular/core';
import {HEROES} from './HEROES';
import {Hero} from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
