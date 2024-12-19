import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title="";
  @Input() userName="";
  @Input() content="";
  @Input() imageUrl="";

}