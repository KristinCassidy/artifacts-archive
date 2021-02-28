import { Component, OnInit } from '@angular/core';
import { Excursion } from '../../services/models/excursion.model';

@Component({
  selector: 'app-excursion-log',
  templateUrl: './excursion-log.component.html',
  styleUrls: ['./excursion-log.component.css'],
  host: {'class': 'container-fluid'}
})
export class ExcursionLogComponent implements OnInit {
excursionDemo: Excursion;
excursionDemo2= ['Few glass shards', 'few ceramic shards', 'lots of fishing line', 'Letter press pieces', 'bullets'];
excursionDemo3= ['Marble', 'Porcelain doll body', '1919 Penny', 'Milk Glass container'];

  constructor() { 
   this.excursionDemo = new Excursion('2/27/20', '3pm', '5pm', '2hrs', '18.38ft', '', '','', '',
                                      ['Moved north approx. 100ft'],
                                      ['Metal', 'Native American Artifacts', 'China Shards', 'Glass Shards'],[],
                                      'solo', '/assets/excursions/excursion1.jpeg')
  }
  ngOnInit(): void {
  }

}
