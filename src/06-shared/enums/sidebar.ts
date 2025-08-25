interface MenuItem {
    icon: string;
    label: string;
    separator: boolean;
    iconColor?: string;
}

export const menuList: MenuItem[] = [  { icon: 'inbox', label: 'Inbox', separator: true },
    { icon: 'send', label: 'Outbox', separator: false },
    { icon: 'delete', label: 'Trash', separator: false },
    { icon: 'error', label: 'Spam', separator: true },
    { icon: 'settings', label: 'Settings', separator: false },
    { icon: 'feedback', label: 'Send Feedback', separator: false },
    { icon: 'help', iconColor: 'primary', label: 'Help', separator: false },
];
