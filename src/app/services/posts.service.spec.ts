import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [ HttpClientModule, RouterTestingModule ]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
