import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping,faEye } from '@fortawesome/free-solid-svg-icons';
import { TopMenu } from './top-menu/top-menu';
import { TopHeader } from "../top-header/top-header";
import { MainMenu } from './main-menu/main-menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, TopMenu, TopHeader,MainMenu],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Ekart';
  tagline = 'Your one-stop online store';
  message = 'Welcome Boss!';
  icons = {
    cart : faCartShopping,
    search: faEye
  }
}
