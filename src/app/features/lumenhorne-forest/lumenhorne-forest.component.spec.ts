import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumenhorneForestComponent } from './lumenhorne-forest.component';

describe('LumenhorneForestComponent', () => {
  let component: LumenhorneForestComponent;
  let fixture: ComponentFixture<LumenhorneForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LumenhorneForestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LumenhorneForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
