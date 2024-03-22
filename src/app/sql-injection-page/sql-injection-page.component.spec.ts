import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlInjectionPageComponent } from './sql-injection-page.component';

describe('SqlInjectionPageComponent', () => {
  let component: SqlInjectionPageComponent;
  let fixture: ComponentFixture<SqlInjectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlInjectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqlInjectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
