import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTheory } from './parent.theory';

describe('ParentTheory', () => {
  let component: ParentTheory;
  let fixture: ComponentFixture<ParentTheory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentTheory]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentTheory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
