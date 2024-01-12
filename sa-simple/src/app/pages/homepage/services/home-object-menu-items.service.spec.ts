import { TestBed } from '@angular/core/testing';

import { HomeObjectMenuItemsService } from './home-object-menu-items.service';

describe('HomeObjectMenuItemsService', () => {
  let service: HomeObjectMenuItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeObjectMenuItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
