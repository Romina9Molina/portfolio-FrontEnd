import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveloguinComponent } from './naveloguin.component';

describe('NaveloguinComponent', () => {
  let component: NaveloguinComponent;
  let fixture: ComponentFixture<NaveloguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveloguinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveloguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
