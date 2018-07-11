export class AppsService {
    private apps = [
        {
          id: 1,
          displayName: "DystopiaGame",
          appVersion: 1421
        },
        {
          id: 2,
          displayName: "Rhys' Animal Crossing",
          appVersion: 1021
        },
        {
          id: 3,
          displayName: "Test App",
          appVersion: 48
        }
      ];

    getApps()
    {
        return this.apps;
    }

    getApp(id: number)
    {
        const app = this.apps.find(
            (s) => {
                return s.id === id;
            }
        );
        return app;
    }
}