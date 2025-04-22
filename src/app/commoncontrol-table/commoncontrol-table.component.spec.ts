import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncontrolTableComponent } from './commoncontrol-table.component';

describe('CommoncontrolTableComponent', () => {
  let component: CommoncontrolTableComponent;
  let fixture: ComponentFixture<CommoncontrolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommoncontrolTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommoncontrolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
