import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitslistComponent } from './produitslist.component';

describe('ProduitslistComponent', () => {
  let component: ProduitslistComponent;
  let fixture: ComponentFixture<ProduitslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
