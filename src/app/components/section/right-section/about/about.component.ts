import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports:[CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  title :string ='About'
  aboutContent :string = 'A motivated front-end developer with basic skills in HTML CSS JavaScript SQL C#, and familiarity with Docker Git and AWS. Completed beginner projects eager to learn and open to new opportunities. Proficient in basic English communication.'

}
