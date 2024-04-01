import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-password-attack',
  templateUrl: './online-password-attack.component.html',
  styleUrl: './online-password-attack.component.css'
})
export class OnlinePasswordAttackComponent {
  pageTitle: string = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'Ataques a contraseñas online';
    this.titleService.setTitle(this.pageTitle);
  }
}
