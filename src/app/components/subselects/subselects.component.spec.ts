import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubselectsComponent } from './subselects.component';

describe('SubselectsComponent', () => {
  let component: SubselectsComponent;
  let fixture: ComponentFixture<SubselectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubselectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubselectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
