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
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type GithubResultDesc = {
  name: string;
  path: string;
  download_url: string;
};

export type S3GWTestResult = {
  name: string;
  url: string;
  what: string;
  whatURL: string;
  date: string;
  branch: string;
  pr: string;
  sha: string;
  user: string;
  results: {
    success: string[];
    failed: string[];
    errors: string[];
  };
};

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  results: S3GWTestResult[] = [];
  resultsSubject: BehaviorSubject<S3GWTestResult[]> =
    new BehaviorSubject<S3GWTestResult[]>([]);

  constructor(public http: HttpClient) {
    this.refreshResults();
  }

  refreshResults() {
    this.http.get<GithubResultDesc[]>(
      "https://api.github.com/repos/aquarist-labs/s3gw-status/contents/results/s3tests"
    ).subscribe({
      next: (results: GithubResultDesc[]) => {
        this.results = [];
        results.forEach((entry: GithubResultDesc) => {
          this.obtainResult(entry);
        });
      }
    });
  }

  obtainResult(entry: GithubResultDesc) {
    this.http.get<S3GWTestResult>(entry.download_url)
    .subscribe({
      next: (result: S3GWTestResult) => {
        result.name = entry.name;
        result.url = entry.download_url;
        if (!!result.branch && result.branch.length > 0) {
          const b = result.branch;
          result.what = `${b}@aquarist-labs/ceph`;
          result.whatURL = `https://github.com/aquarist-labs/ceph/tree/${b}`;
        } else if (!!result.pr && result.pr.length > 0) {
          const pr = result.pr;
          result.what = `aquarist-labs/ceph#${pr}`;
          result.whatURL = `https://github.com/aquarist-labs/ceph/pull/${pr}`;
        }
        this.results.push(result);
        this.resultsSubject.next(this.results);
      }
    });
  }

  public getResults(): BehaviorSubject<S3GWTestResult[]> {
    return this.resultsSubject;
  }
}
