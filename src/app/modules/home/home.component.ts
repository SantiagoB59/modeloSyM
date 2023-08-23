import { Component } from '@angular/core'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  images = [
    { src: 'path/to/image1.jpg', alt: 'Image 1' },
    { src: 'path/to/image2.jpg', alt: 'Image 2' },
    { src: 'path/to/image3.jpg', alt: 'Image 3' }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}