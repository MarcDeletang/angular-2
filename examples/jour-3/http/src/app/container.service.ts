import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class ContainerService {
	readonly url: string = 'http://127.0.1:1338/item'
	items = []

	constructor(private client: Http) {
	}

	create(data, onSuccess = null, onError = null) {
		return this.client.post(this.url, data).subscribe(result => {
			console.log(result)
			this.items.push(result.json())
			if (onSuccess)
				onSuccess(result)
		},
		error => {
			if (onError)
				onError(error)
			console.log('error', error)
		})
	}

	getAll(onSuccess = null, onError = null) {
		return this.client.get(this.url).subscribe(result => {
			console.log(result)
			this.items = result.json()
			if (onSuccess)
				onSuccess(result)
		},
		error => {
			if (onError)
				onError(error)
			console.log('error', error)
		})
	}
}