import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsMenuComponent } from './spells-menu.component';

describe('SpellsMenuComponent', () => {
  let component: SpellsMenuComponent;
  let fixture: ComponentFixture<SpellsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
