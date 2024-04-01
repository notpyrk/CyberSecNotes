import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.css']
})
export class XssComponent implements OnInit {
  pageTitle: string = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'Cross-Site Scripting (XSS)';
    this.titleService.setTitle(this.pageTitle);
  }

  copyToClipboard() {
    const textarea = document.getElementById('codigo') as HTMLTextAreaElement;
    textarea.select();
    console.log(textarea.select());
    document.execCommand('copy');
  }

}

