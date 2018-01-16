import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sn-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides: ISlide[];

  constructor() {
    this.slides = [
      {
        image: 'composite-panels.jpg',
        title: 'Композитные панели'
      },
      {
        image: 'window-frames.jpg',
        title: 'Рамы'
      },
      {
        image: 'doors.jpg',
        title: 'Двери'
      },
      {
        image: 'iron-gates.jpg',
        title: 'Железные ворота'
      },
      {
        image: 'zabory.jpg',
        title: 'Заборы'
      },
      {
        image: 'cast-iron-batteries.jpg',
        title: 'Чугунные батареи'
      },
      {
        image: 'shifers.jpg',
        title: 'Шифер'
      },
      {
        image: 'doski.jpg',
        title: 'Доски'
      },
      {
        image: 'asbest-truby.jpg',
        title: 'Асбест трубы'
      }
    ];
  }

  ngOnInit() {
  }

}

interface ISlide {
  image: string;
  title: string;
}
