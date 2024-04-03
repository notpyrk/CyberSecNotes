import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-offline-password-attack',
  templateUrl: './offline-password-attack.component.html',
  styleUrl: './offline-password-attack.component.css'
})
export class OfflinePasswordAttackComponent {
  pageTitle: string = '';
  john:  string = `john --format=<format> --wordlist=<wordlist> <file>`;
  unshadow:  string = `unshadow ficheroPasswd ficheroShadow > ficheroGenerado`;
  decrypt:  string = `john --format=md5crypt-long --wordlist=/usr/share/wordlists/rockyou.txt ficheroGenerado`;
  comando:  string = 'comando';
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'Ataques a contraseñas offline';
    this.titleService.setTitle(this.pageTitle);
  }
  copyContent(param: any) {
    const codeContainer = document.querySelector(param) as HTMLElement;
    console.log(codeContainer);
    if (codeContainer) {
      const range = document.createRange();
      range.selectNode(codeContainer);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
      window.getSelection()?.removeAllRanges();
    }
  }
}
