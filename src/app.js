import 'bootstrap/dist/css/bootstrap.css';

import { getNegotiations } from './api.js';
import { Observable } from 'rxjs';

Observable
    .fromEvent(document.querySelector('#btn'),'click')
    .debounceTime(500)
    .take(3)
    .mergeMap(() => Observable.fromPromise(getNegotiations()))
    .subscribe(
        negociacoes => {
            alert('Importou!');
            console.log(negociacoes)
        },
        err => console.log(err)
    );