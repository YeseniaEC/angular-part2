import { ProfileRouterModule } from './profile-router.module';

describe('ProfileRouterModule', () => {
  let profileRouterModule: ProfileRouterModule;

  beforeEach(() => {
    profileRouterModule = new ProfileRouterModule();
  });

  it('should create an instance', () => {
    expect(profileRouterModule).toBeTruthy();
  });
});
