import {
	Injectable
} from '@angular/core';
import { Observable } from 'rxjs/Observable'
declare let io

@Injectable()
export class WebsocketService {
  private readonly url = 'http://52.213.184.59:1338'
  private socket

  sendMessage(sender, message){
    this.socket.emit('add-message', { sender: sender, message: message })
    this.socket.emit('add-message2', { sender: sender, message: message })
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log('IO GET DATA', data)
        observer.next(data)
      })
      return () => {
        this.socket.disconnect()
      }
    })
    return observable;
  }

}