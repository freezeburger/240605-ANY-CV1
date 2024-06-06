import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibAnyComponent } from './lib-any.component';

describe('LibAnyComponent', () => {
  let component: LibAnyComponent;
  let fixture: ComponentFixture<LibAnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibAnyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
