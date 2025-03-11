import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlturasComponent } from './alturas.component';

describe('AlturasComponent', () => {
  let component: AlturasComponent;
  let fixture: ComponentFixture<AlturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
