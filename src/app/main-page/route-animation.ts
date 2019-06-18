import {
     transition,
     trigger,
     query,
     style,
     animate,
     group,
     state
} from '@angular/animations';

export const slideInAnimation =
     trigger('routeAnimations', [
          transition('* <=> *', [
               query(':enter, :leave',
                    style({ position: 'absolute', width: '100%' }),
                    { optional: true }),
               group([
                    query(':enter', [
                         style({ opacity: '100' }),
                         animate('0.7s ease-in-out',
                              style({ opacity: '100' }))
                    ], { optional: true }),
                    query(':leave', [
                         style({ opacity: '100'}),
                         animate('0.7s ease-in-out',
                              style({ opacity: '0' }))
                    ], { optional: true }),
               ])
          ])
     ]);
