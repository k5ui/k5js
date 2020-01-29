/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FoldIcon, KebabVerticalIcon, UnfoldIcon, ZapIcon } from '@ksjs-ui/icons';
import { CONTAINER_GUTTER, CONTAINER_WIDTH } from '@ksjs-ui/layout';
import { A11yText } from '@ksjs-ui/typography';
import { IconButton } from '@ksjs-ui/button';
import Dropdown from '@ksjs-ui/dropdown';
import { useMeasure } from '@ksjs-ui/hooks';

import { useReset } from './dataHooks';

let dropdownTarget = props => (
  <IconButton {...props} variant="nuance" icon={KebabVerticalIcon} id="ks-list-dropdown">
    <A11yText>Show more...</A11yText>
  </IconButton>
);

export function MoreDropdown({ listKey, measureRef, isFullWidth, onFullWidthToggle }) {
  let { width } = useMeasure(measureRef);
  const onReset = useReset(listKey);
  const TableIcon = isFullWidth ? FoldIcon : UnfoldIcon;
  const tableToggleIsAvailable = width > CONTAINER_WIDTH + CONTAINER_GUTTER * 2;

  const items = [
    {
      content: 'Reset filters, cols, etc.',
      icon: <ZapIcon />,
      id: 'ks-list-dropdown-reset', // for cypress tests
      onClick: onReset,
    },
    {
      content: isFullWidth ? 'Collapse table' : 'Expand table',
      icon: <TableIcon css={{ transform: 'rotate(90deg)' }} />,
      isDisabled: !tableToggleIsAvailable,
      onClick: onFullWidthToggle,
    },
  ];

  return <Dropdown align="right" target={dropdownTarget} items={items} />;
}
