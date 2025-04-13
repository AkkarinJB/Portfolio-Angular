import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent  {
  exp1Date :string = '24 February - 12 March';
  exp1Header :string ='SEO and Web Optimization';
  exp1Company :string ='8 Bit Advertising';
  exp1Content :string = 'SEO and overall performance to enhance search engine rankings and user engagement Designed and optimized web pages for an enhanced user experience (UX) Maintained and updated website functionality and content as assigned, ensuring high performance and reliability'

  exp2Date :string = 'March 24th, present';
  exp2Header :string ='Frontend Developer Internship';
  exp2Company :string ='Click to Design';
  exp2Content :string = 'Develop in the Frontend section, design components, connect to the swagger API, retrieve data to display, and add features according to the requirements.';
}
