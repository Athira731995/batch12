import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooklistComponent } from './hooklist.component';

describe('HooklistComponent', () => {
  let component: HooklistComponent;
  let fixture: ComponentFixture<HooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
