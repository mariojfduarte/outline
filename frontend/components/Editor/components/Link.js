// @flow
import React from 'react';

type Props = {
  children: any,
  attributes: Object,
  node: Object,
};

export default function Link({ attributes, node, children }: Props) {
  return (
    <a {...attributes} href={node.data.get('href')}>
      {children}
    </a>
  );
}
