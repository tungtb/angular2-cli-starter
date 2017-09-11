import { Injectable } from '@angular/core';
import { CoreService } from "./core.service";
import { Http } from "@angular/http";

@Injectable()
export class InterviewService extends CoreService {

    constructor(_http: Http) {
        super(_http);
    }

}
