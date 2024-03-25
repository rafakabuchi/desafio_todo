import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() src: string = 'assets/img/banner.png';
  @Input() alt: string =
    'banner com uma moça sentada diante do pc com a escrita ao lado de to do list';
}
