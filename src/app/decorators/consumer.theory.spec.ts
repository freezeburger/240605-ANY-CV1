import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerTheory } from './consumer.theory';

describe('ConsumerTheory', () => {
  let component: ConsumerTheory;
  let fixture: ComponentFixture<ConsumerTheory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumerTheory]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumerTheory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
