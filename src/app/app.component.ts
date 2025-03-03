import { Component } from '@angular/core';
import { FlexLayoutModule } from 'ng-flex-layout';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[FlexLayoutModule ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-flex-layout';
}
