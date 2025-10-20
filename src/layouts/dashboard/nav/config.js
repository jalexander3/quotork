import {
  IconLayoutDashboard,
  IconFileDollar,
  IconRoute,
  IconClipboardList,
  IconSettings,
  IconShield,
  IconLogs
} from '@tabler/icons-react';

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/dashboard',
    disabled: true,
    icon: <IconLayoutDashboard size={22} stroke={1.75} />,
  },
  {
    title: 'Quote',
    path: '/dashboard/quote',
    icon: <IconFileDollar size={22} stroke={1.75} />,
  },
  {
    title: 'History',
    path: '/dashboard/routes',
    disabled: true,
    icon: <IconLogs size={22} stroke={1.75} />,
  },
  {
    title: 'Templates',
    path: '/dashboard/permits',
    disabled: true,
    icon: <IconClipboardList size={22} stroke={1.75} />,
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    disabled: true,
    icon: <IconSettings size={22} stroke={1.75} />,
  },
  {
    title: 'Admin',
    path: '/dashboard/admin',
    disabled: true,
    icon: <IconShield size={22} stroke={1.75} />,
  },
];

export default navConfig;
