import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],



})
export class HeaderComponent {


}
