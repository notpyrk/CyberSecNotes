import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfiComponent } from './lfi.component';

describe('LfiComponent', () => {
  let component: LfiComponent;
  let fixture: ComponentFixture<LfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
