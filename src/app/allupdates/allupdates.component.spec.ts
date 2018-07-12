import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllupdatesComponent } from './allupdates.component';

describe('AllupdatesComponent', () => {
  let component: AllupdatesComponent;
  let fixture: ComponentFixture<AllupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
