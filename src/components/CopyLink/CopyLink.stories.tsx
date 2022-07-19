import React from 'react';
import CopyLink from 'src/components/CopyLink/CopyLink';

export default {
  title: 'components/atoms/CopyLink',
  component: CopyLink
};

// @ts-ignore
const Template = (args: object) => <CopyLink {...args}>Read More</CopyLink>;

export const SimpleLink = Template.bind([]);

export const RouterLink = Template.bind([]);
// @ts-ignore
RouterLink.args = {
  to: '/read-more',
  isRouterLink: true
};

export const ExternalLink = Template.bind([]);
// @ts-ignore
ExternalLink.args = {
  to: '/read-more',
  isExternalLink: true
};
