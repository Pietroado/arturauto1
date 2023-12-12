import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisposteFormComponent } from './risposte-form.component';

describe('RisposteFormComponent', () => {
  let component: RisposteFormComponent;
  let fixture: ComponentFixture<RisposteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisposteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisposteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
