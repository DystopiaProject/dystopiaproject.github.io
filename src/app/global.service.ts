import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
    public title = 'DystopiaProject';
    public appVersion = "1.1.0.2a";
    public gitRepo = "https://github.com/DystopiaProject/dystopiaproject.github.io/";
    public allUpdatesVisible = true;

    constructor(){}

}

