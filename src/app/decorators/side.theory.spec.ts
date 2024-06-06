import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTheory } from './side.theory';

describe('SideTheory', () => {
  let component: SideTheory;
  let fixture: ComponentFixture<SideTheory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideTheory]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideTheory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
