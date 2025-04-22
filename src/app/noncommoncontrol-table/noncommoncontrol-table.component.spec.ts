import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncommoncontrolTableComponent } from './noncommoncontrol-table.component';

describe('NoncommoncontrolTableComponent', () => {
  let component: NoncommoncontrolTableComponent;
  let fixture: ComponentFixture<NoncommoncontrolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoncommoncontrolTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoncommoncontrolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
