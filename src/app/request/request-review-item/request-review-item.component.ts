import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
    selector: 'app-request-review-item',
    templateUrl: './request-review-item.component.html',
    styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

    requests: Request[] = [];

    constructor(
        private requestsvc: RequestService,
        private activatedRoute: ActivatedRoute,
        private syssvc: SystemService,
        private router: Router
    ) { }
    request!: Request;
    response: string = "";

    ngOnInit(): void {
        if (this.syssvc.loggedInUser == null) { this.router.navigateByUrl("/login"); }
        let id = this.getId();
        this.requestsvc.get(id).subscribe(
            res => {
                this.request = res;
                console.debug("Request loaded successfully", res);
            },
            err => { console.error(err) }
        );
        
    }

    getId(): number {
        const routeParams = this.activatedRoute.snapshot.paramMap;
        const id = Number(routeParams.get('id'))
        return id;
    }

    approved(): void {
        this.requestsvc.approve(this.request).subscribe(
            res => {
                console.debug("Request successfully approved!", res);
                this.router.navigateByUrl("/request/review/list")
            },
            err => { console.error(err) }
        )

    }
    rejected(): void {
        if (this.request.rejectionReason !== null && this.request.rejectionReason !== "") {
            this.requestsvc.reject(this.request).subscribe(
                res => {
                    console.debug("Request successfully rejected!", res);
                    this.router.navigateByUrl("/request/review/list")
                },
                err => { console.error(err) }
            )
        } else {
            this.response = "Need a Rejection Reason!"
        }

    }

}