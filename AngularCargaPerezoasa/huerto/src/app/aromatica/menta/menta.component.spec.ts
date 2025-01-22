import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentaComponent } from './menta.component';

describe('MentaComponent', () => {
  let component: MentaComponent;
  let fixture: ComponentFixture<MentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
