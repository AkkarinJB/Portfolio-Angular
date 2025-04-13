import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ContactComponent } from '../../contact/contact.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-left-section',
  standalone:true,
  imports:[HeaderComponent , NavbarComponent , ContactComponent],
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent  {
}
