import { Home, Briefcase, FileCheck, CreditCard, Inbox, History, Settings, User, LucideIcon } from 'lucide-react';

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  available: boolean;
  isMobilePrimary?: boolean; // Show in bottom dock
  isMobileMore?: boolean; // Show in More menu
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { 
    label: 'Today', 
    href: '/dashboard', 
    icon: Home, 
    available: true,
    isMobilePrimary: true 
  },
  { 
    label: 'Deals', 
    href: '/deals', 
    icon: Briefcase, 
    available: false,
    isMobilePrimary: true 
  },
  { 
    label: 'Deliverables', 
    href: '/deliverables', 
    icon: FileCheck, 
    available: false,
    isMobilePrimary: true 
  },
  { 
    label: 'Payments', 
    href: '/payments', 
    icon: CreditCard, 
    available: false,
    isMobilePrimary: true 
  },
  { 
    label: 'Inbox', 
    href: '/inbox', 
    icon: Inbox, 
    available: false,
    isMobileMore: true 
  },
  { 
    label: 'History', 
    href: '/history', 
    icon: History, 
    available: false,
    isMobileMore: true 
  },
  { 
    label: 'Settings', 
    href: '/settings', 
    icon: Settings, 
    available: false,
    isMobileMore: true 
  },
  { 
    label: 'Profile', 
    href: '/profile', 
    icon: User, 
    available: false,
    isMobileMore: true 
  }
];
