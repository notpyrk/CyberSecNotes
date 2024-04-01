import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Prism from 'prismjs';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.css']
})
export class XssComponent implements AfterViewInit, OnInit  {
  pageTitle: string = '';
  panelHeader: string = 'Codigo XSS';
  panelXSSHeader: string = 'Que es XSSaa';
  
  panelStyle: any = {'background-color': '#f4f4f4', 'border': '1px solid #ccc'};
  codeContent: string = `if(test){
    // código
  } else {
    // otro código
  }
  if(test){
    // código
  } else {
    // otro código
  }
  if(test){
    // código
  } else {
    // otro código
  }
  if(test){
    // código
  } else {
    // otro código
  }
  if(test){
    // código
  } else {
    // otro código
  }
  if(test){
    // código
  } else {
    // otro código
  }
  if(test){
    // código
  } else {
    // otro código
  }
  if(test){
    // código
  } else {
    // otro código
  }`;
  
  
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.pageTitle = 'Cross-Site Scripting (XSS)';
    this.titleService.setTitle(this.pageTitle);
  }

  ngAfterViewInit(): void {
    Prism.highlightAll(); // Resalta la sintaxis del código
  }

  copyContent() {
    const codeContainer = document.querySelector('.code-container') as HTMLElement;
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
