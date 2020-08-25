import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import { SplashScreenService } from '../../core/shared-services/splash-screen.service';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  @ViewChild('splashScreen', {static: true}) splashScreen: ElementRef;
  constructor(
    private el: ElementRef,
    private splashScreenService: SplashScreenService) {
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit() {
  

    this.splashScreenService.init(this.splashScreen);
  }

}
