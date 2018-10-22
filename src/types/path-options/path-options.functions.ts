import * as strings from '@angular-devkit/core/src/utils/strings';
import {
  apply,
  branchAndMerge,
  mergeWith,
  move,
  template,
  url,
  MergeStrategy,
  Rule
} from '@angular-devkit/schematics';

import { PathOptions } from './path-options.interface';

export function processTemplates(
  options: PathOptions,
  directory: string = options.path,
  mergeStrategy: MergeStrategy = MergeStrategy.Default
): Rule {
  return branchAndMerge(
    mergeWith(
      apply(url('./files'), [
        template({
          ...strings,
          ...{ uppercase: (value: string) => value.toUpperCase() },
          ...options
        }),
        move(directory)
      ])
    ),
    mergeStrategy
  );
}
