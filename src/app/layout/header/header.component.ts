import { Location } from '@angular/common'
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleButton: boolean = false;
  sidebar: boolean = false;
  fadeSection: boolean = false;
  backBtnState: boolean = false;

  routes: any = [
    { name: "Home", path: '/'},
    { name: "About", path: '/'},
    { name: "Finances", path: '/'},
    { name: "Insurance", path: '/'},
  ]

  constructor(
    private location: Location,
  ) {}

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section 
    this.fadeSection = !this.fadeSection;
  }

  back() {
    this.location.back();
  }

}
