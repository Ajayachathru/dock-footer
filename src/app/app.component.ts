import { Component } from '@angular/core';

type DockPosition = 'bottom' | 'right';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dockPosition: DockPosition = 'bottom';

  setDockPosition(p: DockPosition) {
    if (p !== this.dockPosition) {
      this.dockPosition = p;
    }
  }
}
