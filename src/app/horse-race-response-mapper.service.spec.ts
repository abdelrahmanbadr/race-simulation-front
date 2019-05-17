import { TestBed } from '@angular/core/testing';

import { HorseRaceResponseMapperService } from './horse-race-response-mapper.service';

describe('HorseRaceResponseMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorseRaceResponseMapperService = TestBed.get(HorseRaceResponseMapperService);
    expect(service).toBeTruthy();
  });
});
