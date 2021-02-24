import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RiverLevelService } from '../../../services/river-level.service';


@Component({
	selector: 'app-river-level',
	templateUrl: './river-level.component.html',
	styles: [`
		.row {
    		font-family: Helvetica Neue;
    		margin: 0 2em;
		}
		.riverData {
    		display: flexbox;
		}
	`],
	host: { 'class' : 'content'}
})

export class RiverLevelComponent implements OnInit, OnDestroy {
	riverSubscription: Subscription;
	riverData: any;
	riverLevel: any;

	constructor( private riverLevelService: RiverLevelService ) { }

	ngOnInit() {
		this.riverSubscription = this.riverLevelService.getRiverLevel()
			.subscribe( data => {
				this.riverData = data;
				this.riverLevel = this.riverData.value.timeSeries[1].values[0].value[0].value;
			});
	}

	ngOnDestroy() {
		this.riverSubscription.unsubscribe();
	}

}
