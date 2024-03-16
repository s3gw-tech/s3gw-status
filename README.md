# s3gw dev status

In this repository we keep the results from testing the s3gw project.

As of time of writing, in `results/` we keep reports from running the
[s3tests](https://github.com/ceph/s3-tests) battery against our radosgw
implementation.

This can be expanded to hold other types of results from other sources,
but there was no need at this time.

As a visual aid, these test results are also available
[here](https://status.s3gw.tech).


## Adding reports

Adding new reports is a matter of pushing a new commit including the json file
to the main branch of this repository. We are trying to keep this workflow
simple until we have a reason not to.


## What are the other things in this repo?

One will be able to find an `s3gw-status` directory. This contains the Angular
project for the frontend made available through our
[Github Pages](https://status.s3gw.tech/). Additionally,
there's a `docs` directory, which contains the resulting build of this
project.

Whenever the Angular project is updated, the contents of the `docs` directory
will need to be updated as well; otherwise changes will not be reflected on
this project pages.


## LICENSE

Licensed under the Apache License, Version 2.0 (the "License");
you may not use licensed files except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

or the LICENSE file in this repository.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

