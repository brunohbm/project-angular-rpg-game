import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAttributesMenuComponent } from './character-attributes-menu.component';

describe('CharacterAttributesMenuComponent', () => {
  let component: CharacterAttributesMenuComponent;
  let fixture: ComponentFixture<CharacterAttributesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAttributesMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterAttributesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
