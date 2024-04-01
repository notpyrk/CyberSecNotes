import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackingWebMenuComponent } from './hacking-web-menu.component';

describe('HackingWebMenuComponent', () => {
  let component: HackingWebMenuComponent;
  let fixture: ComponentFixture<HackingWebMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackingWebMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackingWebMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
