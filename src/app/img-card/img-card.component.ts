import { Component, OnInit } from '@angular/core';
class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
export class Button { 
  text: string;
  disabled: boolean;
  color: string;
}
@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };
  public button: Button = {
  text: 'Give me another cat',
  color: 'primary',
  disabled: false
};
  constructor() { }
public src: string;
  ngOnInit() {
       this.src = this.image.api + this.image.message + 
    '?size=' + this.image.fontsize;
    
     if (!navigator.onLine) {
    this.button.text = 'Sorry, you\'re offline';
    this.button.disabled = true;
  }
  }
public generateSrc(): void {
  this.src = this.image.api + this.image.message + 
    '?size=' + this.image.fontsize +
    '&ts=' + Date.now();
}
}

