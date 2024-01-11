import { TestBed } from '@angular/core/testing';

import { TopMenuItemsService } from './top-menu-items.service';

describe('TopMenuItemsService', () => {
  let service: TopMenuItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMenuItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
