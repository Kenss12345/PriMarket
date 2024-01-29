import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  path:String = Path.url;

  constructor() { }

  ngOnInit():void {
  }


}
