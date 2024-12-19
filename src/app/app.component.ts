import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CardComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts=[
    {
        title:"Tree",
        imageUrl:"/assets/images/tree.jpeg",
        content:"Tree Content",
        userName:"Tree"
    },
    {
      title:"Montain",
      imageUrl:"/assets/images/mountain.jpeg",
      content:"Montain Content",
      userName:"Montain"
    }
    ,
    {
      title:"Biking",
      imageUrl:"/assets/images/biking.jpeg",
      content:"Biking Content",
      userName:"Biking"
    }
  ]
}
