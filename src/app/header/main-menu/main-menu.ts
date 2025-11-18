import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faCartShopping,faAtom,faEye,faFaceGrin,faGem,faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-menu',
  imports: [FontAwesomeModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {
     icons = {
    user: faUser,
    cart: faCartShopping,
    Atom: faAtom,
    search: faEye,
    creditcard:faCreditCard,
    review:faFaceGrin,
    categories:faGem
  };
}
