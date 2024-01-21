import { TestBed } from '@angular/core/testing';

import { UnlockDialogService } from './unlock-dialog.service';

describe('UnlockDialogService', () => {
  let service: UnlockDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnlockDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
