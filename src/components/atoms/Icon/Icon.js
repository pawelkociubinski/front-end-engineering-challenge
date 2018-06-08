/* @flow */
// Dependencies
import React from 'react';
import invariant from 'invariant';
// Custom
import * as definitions from './definitions';
// Types
import type { IconType } from './types';

type Props = {|
  +className?: string,
  +icon: IconType,
  +size?: number,
|};

const Icon = (props: Props) => {
  const { size, icon, className } = props;
  const iconDefinition = definitions[icon];

  invariant(iconDefinition, `There is no icon named ${icon} defined`);

  return (
    <svg className={className} height={size} width={size} viewBox="0 0 32 32">
      {iconDefinition.map(d => <path key={d} d={d} />)}
    </svg>
  );
};

Icon.defaultProps = {
  size: 10,
  className: '',
};

export default Icon;
