import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorneIcelandComponent } from './horne-iceland.component';

describe('HorneIcelandComponent', () => {
  let component: HorneIcelandComponent;
  let fixture: ComponentFixture<HorneIcelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorneIcelandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorneIcelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
