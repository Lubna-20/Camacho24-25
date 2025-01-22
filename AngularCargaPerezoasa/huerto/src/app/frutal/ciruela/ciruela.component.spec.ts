import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiruelaComponent } from './ciruela.component';

describe('CiruelaComponent', () => {
  let component: CiruelaComponent;
  let fixture: ComponentFixture<CiruelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiruelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiruelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
