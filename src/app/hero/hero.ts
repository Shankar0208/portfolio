import { Component } from '@angular/core';
import { heroDetails } from '../models/constants';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  protected  heroDetails = heroDetails;
}
