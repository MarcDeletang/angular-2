import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'app works!'
	messages = [];
	connection;
	message: string
	sender: string

	constructor(private socket: WebsocketService){

	}

	ngOnInit() {
		this.connection = this.socket.getMessages().subscribe(message => {
			console.log('MESSAGE', message)
			this.messages.push(message);
		})
	}

	ngOnDestroy() {
		this.connection.unsubscribe();
	}

	sendMessage(data: string, sender: string='angular'){
		this.socket.sendMessage(this.sender, this.message)
		this.message = ''
	}

}
