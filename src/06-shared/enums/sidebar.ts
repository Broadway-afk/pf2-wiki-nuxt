interface BtnItem {
    url: string;
    label: string;
}
interface MenuItem {
    icon: string;
    label: string;
    url?: string;
    separator: boolean;
    iconColor?: string;
    btnList?: BtnItem[]
}

export const menuList: MenuItem[] = [  { icon: 'inbox', label: 'Inbox', separator: true },
    { icon: 'send', label: 'Outbox', url:'/', separator: false, btnList: [
            {
                url: '/races',
                label: 'Источники',
            }
        ] },
    { icon: 'delete', label: 'Trash', separator: false },
    { icon: 'error', label: 'Spam', separator: true },
    { icon: 'settings', label: 'Settings', separator: false },
    { icon: 'feedback', label: 'Send Feedback', separator: false },
    { icon: 'help', iconColor: 'primary', label: 'Help', separator: false },
];
