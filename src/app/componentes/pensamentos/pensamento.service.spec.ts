import { TestBed } from '@angular/core/testing';

import { Pensamento } from '../pensamentos/pensamento/pensamento';

describe('Pensamento', () => {
  let service: Pensamento;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pensamento);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
