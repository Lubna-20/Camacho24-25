import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepolloComponent } from './repollo.component';

describe('RepolloComponent', () => {
  let component: RepolloComponent;
  let fixture: ComponentFixture<RepolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
