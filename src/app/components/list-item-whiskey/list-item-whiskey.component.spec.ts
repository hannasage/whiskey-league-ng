import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemWhiskeyComponent } from './list-item-whiskey.component';

describe('ListItemWhiskeyComponent', () => {
  let component: ListItemWhiskeyComponent;
  let fixture: ComponentFixture<ListItemWhiskeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemWhiskeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemWhiskeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
