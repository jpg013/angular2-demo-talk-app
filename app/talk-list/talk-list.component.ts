import {Component} from 'angular2/core';
import {Talk} from '../data/talk'
import {TalkService} from '../services/talk-service';

@Component({
  selector: 'talk-list',
  templateUrl: 'app/talk-list/talk-list.template.html'
})

export class TalkList {
    public talks: Talk[];

    constructor(private _talkService: TalkService) { }

    getTalks() {
        return this._talkService.getTalks().then(talks => this.talks = talks);
    }

    ngOnInit() {
        this.getTalks();
    }
}
