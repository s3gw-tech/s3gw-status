/*
 * Copyright 2022 SUSE, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsService, S3GWTestResult } from 'src/app/shared/results.service';

@Component({
  selector: 's3gw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  public results: S3GWTestResult[] = [];
  public sub?: Subscription;

  constructor(public resultSvc: ResultsService) { }

  ngOnInit(): void {
    this.sub = this.resultSvc.getResults().subscribe({
      next: (results: S3GWTestResult[]) => {
        this.results = results;
        console.log(`total results: ${this.results.length}`);
      }
    });
  }

  ngOnDestroy(): void {
    if (!!this.sub) {
      this.sub.unsubscribe();
    }
  }

  selectResult(result: S3GWTestResult) {
    console.log(`select ${result.name}`);
  }
  

}
