import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler)
        : Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': "19f0931c32msh5edfda052f83583p189b91jsn245ea7f8d537",
                'x-rapidapi-host': "rawg-video-games-database.p.rapidapi.com",
            },
            setParams: {
                key: '3551e0343cd745e9abc2a349cd8244b7'
            }
        })
        return next.handle(req)
    }

}