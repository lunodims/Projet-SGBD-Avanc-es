import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencardDataComponent } from './opencard-data.component';

describe('OpencardDataComponent', () => {
  let component: OpencardDataComponent;
  let fixture: ComponentFixture<OpencardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpencardDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpencardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
