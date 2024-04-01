import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-hacking-web-menu',
  standalone: true,
  imports: [],
  templateUrl: './hacking-web-menu.component.html',
  styleUrl: './hacking-web-menu.component.css'
})
export class HackingWebMenuComponent {
  pageTitle: string = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'Hacking Web';
    this.titleService.setTitle(this.pageTitle);
  }
}
