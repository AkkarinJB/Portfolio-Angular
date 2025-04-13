import { Component, OnInit } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css'],
  imports: [AboutComponent, ExperienceComponent, ProjectComponent]
})
export class RightSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
