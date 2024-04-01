import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-password-attack-menu',
  standalone: true,
  imports: [],
  templateUrl: './password-attack-menu.component.html',
  styleUrl: './password-attack-menu.component.css'
})
export class PasswordAttackMenuComponent {
  pageTitle: string = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'Ataques a contraseñas';
    this.titleService.setTitle(this.pageTitle);
  }
}
