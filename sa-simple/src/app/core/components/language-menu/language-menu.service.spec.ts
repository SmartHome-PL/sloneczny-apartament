import { TestBed } from '@angular/core/testing';

import { LanguageMenuService } from './language-menu.service';

describe('LanguageMenuService', () => {
  let service: LanguageMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
