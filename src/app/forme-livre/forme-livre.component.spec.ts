import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeLivreComponent } from './forme-livre.component';

describe('FormeLivreComponent', () => {
  let component: FormeLivreComponent;
  let fixture: ComponentFixture<FormeLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormeLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
