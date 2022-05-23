import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpokemonsComponent } from './listpokemons.component';

describe('ListpokemonsComponent', () => {
  let component: ListpokemonsComponent;
  let fixture: ComponentFixture<ListpokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
