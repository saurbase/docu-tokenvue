import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Gateway',
      link: {
        type: 'generated-index',
        title: 'Gateway',
        description:
          'Configure provider connections, virtual keys, guardrails, and routing policies.',
      },
      items: [
        'tokenvue/llm-config',
        'tokenvue/virtual-key',
        'tokenvue/guardrail',
        'tokenvue/auto-router',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      link: {
        type: 'generated-index',
        title: 'Operations',
        description:
          'Review usage, cost, model activity, blocked requests, and workspace plan status.',
      },
      items: ['connect/insights', 'connect/billing', 'connect/token-calculator'],
    },
    {
      type: 'category',
      label: 'Audit',
      link: {
        type: 'generated-index',
        title: 'Audit',
        description:
          'Inspect request logs, failed traffic, policy triggers, and breach groups.',
      },
      items: ['audit/logs', 'audit/breaches'],
    },
    {
      type: 'category',
      label: 'Management',
      link: {
        type: 'generated-index',
        title: 'Management',
        description: 'Manage workspaces, team access, roles, and invitations.',
      },
      items: ['management/workspace', 'management/user-management'],
    },
  ],
};

export default sidebars;
