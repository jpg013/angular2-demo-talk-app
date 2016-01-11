import {Component} from 'angular2/core';
import {TalkList} from './talk-list/talk-list.component';
import {TalkService} from './services/talk-service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [TalkList],
    providers: [TalkService]
})

export class AppComponent {
    constructor() {

    }
}
