import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridTableComponent } from './aggrid-table.component';

describe('AggridTableComponent', () => {
  let component: AggridTableComponent;
  let fixture: ComponentFixture<AggridTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggridTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggridTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
