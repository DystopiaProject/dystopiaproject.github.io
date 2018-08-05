export class AppInfo {
    constructor(
        public Apps: [{
            DisplayName: string, AppVersion: number, Description: string, AppLink: string, DownloadText: string
        }],
        public Updates: [{
            AppId: number, Author: string, PostName: string, PostDesc: string, PostLink: string, TimeStamp: number
          }]
    )
    { }
}