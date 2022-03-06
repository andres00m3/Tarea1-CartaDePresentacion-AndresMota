import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent  {
  @Input()
  nombre: string = '';
  @Input()
  biografia: string = '';
  constructor() { }

}
