import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAttackMenuComponent } from './password-attack-menu.component';

describe('PasswordAttackMenuComponent', () => {
  let component: PasswordAttackMenuComponent;
  let fixture: ComponentFixture<PasswordAttackMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordAttackMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordAttackMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
