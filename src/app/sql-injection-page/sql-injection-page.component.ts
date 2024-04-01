import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-sql-injection-page',
  standalone: true,
  imports: [],
  templateUrl: './sql-injection-page.component.html',
  styleUrl: './sql-injection-page.component.css'
})
export class SqlInjectionPageComponent {
  pageTitle: string = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'SQL Injection';
    this.titleService.setTitle(this.pageTitle);
  }
}
