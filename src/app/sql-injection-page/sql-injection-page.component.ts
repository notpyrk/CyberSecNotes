import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-sql-injection-page',
  templateUrl: './sql-injection-page.component.html',
  styleUrl: './sql-injection-page.component.css'
})
export class SqlInjectionPageComponent {
  pageTitle: string = '';

  constructor(private titleService: Title, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }
    });
  }

  ngOnInit(): void {
    this.pageTitle = 'SQL Injection';
    this.titleService.setTitle(this.pageTitle);
  }
}
