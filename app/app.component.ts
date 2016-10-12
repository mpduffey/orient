import {Component}        from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <div class="container">
        <div class="row">
          <div class="col-md-2"><side-menu></side-menu></div>
          <div class="col-md-10 flex-container-column"><router-outlet></router-outlet></div>
        </div>
      </div>
    `
})

export class AppComponent { }