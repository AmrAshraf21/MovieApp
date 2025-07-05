import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heart-icon',
  imports: [CommonModule],
  templateUrl: './heart-icon.html',
  styleUrl: './heart-icon.scss'
})
export class HeartIcon {
 @Input() filled: boolean = false;
  @Input() color: string = '#dc3545'; 
  @Input() size: string = '1rem'; 
}
