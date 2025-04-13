import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isProjectActive = false;
  isExperienceActive = false;
  isAboutActive = false;

  scrollToProject() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToAbout() {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToExp() {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  ngAfterViewProject() {
    const target = document.getElementById('projects');

    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          this.isProjectActive = entry.isIntersecting;
        },
        { threshold: 0.4 }
      );

      observer.observe(target);
    }
  }

  ngAfterViewExp() {
    const target = document.getElementById('experience');

    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          this.isProjectActive = entry.isIntersecting;
        },
        { threshold: 0.4 }
      );

      observer.observe(target);
    }
  }

  ngAfterViewAbout() {
    const target = document.getElementById('about');

    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          this.isProjectActive = entry.isIntersecting;
        },
        { threshold: 0.4 }
      );

      observer.observe(target);
    }
  }



}
