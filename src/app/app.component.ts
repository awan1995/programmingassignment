import { Component } from '@angular/core';
import { SplashScreenService } from './core/shared-services/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(
   
    private splashScreenService: SplashScreenService) {

  }
  ngOnInit(){
    this.splashScreenService.hide();
  }
}
