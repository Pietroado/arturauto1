import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricaAutoComponent } from './carica-auto.component';

describe('CaricaAutoComponent', () => {
  let component: CaricaAutoComponent;
  let fixture: ComponentFixture<CaricaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaricaAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaricaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
