import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePasswordAttackComponent } from './online-password-attack.component';

describe('OnlinePasswordAttackComponent', () => {
  let component: OnlinePasswordAttackComponent;
  let fixture: ComponentFixture<OnlinePasswordAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlinePasswordAttackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlinePasswordAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
