import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-offline-password-attack',
  templateUrl: './offline-password-attack.component.html',
  styleUrl: './offline-password-attack.component.css'
})
export class OfflinePasswordAttackComponent {
  pageTitle: string = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'Ataques a contraseñas offline';
    this.titleService.setTitle(this.pageTitle);
  }
}
