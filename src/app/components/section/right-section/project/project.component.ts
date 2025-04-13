import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  description1 :string = 'Frontend of a food recommendation system for diabetic patients The frontend is developed using React Vite and Tailwind CSS to create the UI and connect to the FastAPI API running on Railway.'
  description2 :string ='Portfolio Website Using React Vite TypeScript Tailwindcss animation ui technology React router';
  description3 :string = 'Portfolio Website Using Angular Tailwind CSS Component left & right section concept OOP can manage for future'
}
