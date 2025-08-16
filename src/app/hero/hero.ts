import { Component } from '@angular/core';
import { heroDetails } from '../models/constants'; 
import { slideInAnimations } from '../models/animations';
@Component({
  selector: 'app-hero',
  imports: [ ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: slideInAnimations()
})
export class Hero {
  protected  heroDetails = heroDetails;
  
}
