export class AppInfo {
    constructor(
        public Apps: [{
            DisplayName: string, AppVersion: number, Description: string
        }],
        public Updates: [{
            AppId: number, PostName: string, PostDesc: string, PostLink: string, TimeStamp: number
          }]
    )
    { }
}