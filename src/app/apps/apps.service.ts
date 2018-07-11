export class AppsService {
    private apps = [
        {
          id: 1,
          displayName: "DystopiaGame",
          appVersion: 1421,
          description: "An FPS RPG in UE4 developed by ZanyLeonic and DaRiceCake."
        },
        {
          id: 2,
          displayName: "DaRiceCake's Animal Crossing",
          appVersion: 1021,
          description: "A recreation of Animal Crossing in UE4."
        },
        {
          id: 3,
          displayName: "Test App",
          appVersion: 48,
          description: "A test app for this."
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