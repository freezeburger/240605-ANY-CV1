import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTheory } from './child.theory';

describe('ChildTheory', () => {
  let component: ChildTheory;
  let fixture: ComponentFixture<ChildTheory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildTheory]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildTheory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
