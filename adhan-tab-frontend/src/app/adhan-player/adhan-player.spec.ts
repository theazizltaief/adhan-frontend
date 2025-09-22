import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhanPlayer } from './adhan-player';

describe('AdhanPlayer', () => {
  let component: AdhanPlayer;
  let fixture: ComponentFixture<AdhanPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhanPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhanPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
