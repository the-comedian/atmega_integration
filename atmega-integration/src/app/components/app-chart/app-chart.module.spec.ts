import { AppChartModule } from './app-chart.module';

describe('AppChartModule', () => {
  let appChartModule: AppChartModule;

  beforeEach(() => {
    appChartModule = new AppChartModule();
  });

  it('should create an instance', () => {
    expect(appChartModule).toBeTruthy();
  });
});
