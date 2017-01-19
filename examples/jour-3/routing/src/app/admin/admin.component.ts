import {
	Component,
	OnInit
} from '@angular/core'
import {
	ActivatedRoute
} from '@angular/router'

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	message: string
	private sub: any

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.message = params['data']
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}
}