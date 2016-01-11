import {Injectable} from 'angular2/core';
import {Talks} from '../data/mock-talks';

@Injectable()
export class TalkService {
	getTalks() {
		console.log(Talks);
		return Promise.resolve(Talks);
	}

	getTalk(id: number) {
    return Promise.resolve(Talks)
      .then(heroes => heroes.filter(h => h.id === id)[0]);
	}
}
