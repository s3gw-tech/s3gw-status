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
import { Pipe, PipeTransform } from '@angular/core';
import { S3Test } from 'src/app/shared/results.service';

@Pipe({
  name: 'success'
})

export class SuccessPipe implements PipeTransform {
  transform(val: S3Test[] | undefined) {
    if (!val) { return 0 }
    return val.filter((t: S3Test) => t.result === 'success').length;
  }
}
