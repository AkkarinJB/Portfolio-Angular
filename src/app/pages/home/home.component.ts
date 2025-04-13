import { Component } from '@angular/core';
import { LeftSectionComponent } from "../../components/section/left-section/left-section.component";
import { RightSectionComponent } from "../../components/section/right-section/right-section.component";

@Component({
  selector: 'app-home',
  imports: [LeftSectionComponent, RightSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  resumeUrl : string = 'https://drive.google.com/file/d/1-Qo0fLet9ogsZqSieqMlgk7V8gP3jlTa/view'
}
