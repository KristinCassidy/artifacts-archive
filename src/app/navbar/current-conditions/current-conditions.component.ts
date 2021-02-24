import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-current-conditions',
  	templateUrl: './current-conditions.component.html',
  	styles: [`
		.wrapper {
			font-family: Helvetica Neue;
			align-items: center;
			padding: 1em 2em;
		}

		h5 {
			color: rgba(85, 85, 85, 0.671);
		}
	`],
  	host: {'class': 'conditions'}
})
export class CurrentConditionsComponent implements OnInit {

  	constructor() { }

  	ngOnInit(): void {
  	}

}
