import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeader } from './top-header/top-header';
import { Container } from './container/container';
import { FormsModule } from '@angular/forms';
import { Search } from './container/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TopHeader,Container,FormsModule,Search],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone:true
})
export class App {
   title = 'angular-ekart';

}
