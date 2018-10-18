import { Rule } from '@angular-devkit/schematics';

import { validateOptions } from '../../types/options.function';
import { Options } from '../../types/options.interface';
import { processTemplates } from '../../util/util';

export function ngrxReducer(options: Options): Rule {
  validateOptions(options);

  return processTemplates(options, `${options.path}/store`);
}
