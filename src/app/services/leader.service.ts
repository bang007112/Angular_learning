import { Leader } from '../shared/leader';
import { LEADERS} from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaderDetails(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeaderFeatured(): Observable<Leader> {
    return of(
      LEADERS.filter(
        (leader: any) => leader.featured
      )[0]
    ).pipe(delay(2000));
  }
}