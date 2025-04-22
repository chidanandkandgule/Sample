import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcontrolTableComponent } from './totalcontrol-table.component';

describe('TotalcontrolTableComponent', () => {
  let component: TotalcontrolTableComponent;
  let fixture: ComponentFixture<TotalcontrolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalcontrolTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalcontrolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
