import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  resumeUrl : string = '';
  ngOnInit(): void {
    this.resumeUrl = environment.resumeUrl;
  }

  nameTitle :string = 'Aekarin Jujaiboon';

  status : string = 'Frontend Developer · internship';

  caption : string = 'coding every time coding is life  and love Buggy Haha !!';

  btnViewResume : string = 'View Resume';
}
