import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePasswordAttackComponent } from './offline-password-attack.component';

describe('OfflinePasswordAttackComponent', () => {
  let component: OfflinePasswordAttackComponent;
  let fixture: ComponentFixture<OfflinePasswordAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfflinePasswordAttackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfflinePasswordAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
