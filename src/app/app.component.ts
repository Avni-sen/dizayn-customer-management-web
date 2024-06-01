import { Component } from '@angular/core';
import { SplashScreenService } from './core/splash-screen.service';

@Component({
  selector: 'elastic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private splashScreenService: SplashScreenService) {
  }

}
