import { TestBed, inject } from '@angular/core/testing';

import { TokenService } from './token.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('TokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService],
      imports: [ RouterTestingModule ]
    });
  });

  it('should be created', inject([TokenService], (service: TokenService) => {
    expect(service).toBeTruthy();
  }));
});
