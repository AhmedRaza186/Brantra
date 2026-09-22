import { Campaign, AttentionItem, PaymentRecord, OperationalMetrics, ActiveProductionData } from '../types/dashboard';

export const operationalMetrics: OperationalMetrics = {
  activeDeals: 6,
  awaitingPayment: 1200,
  paidThisMonth: 3650
};

export const attentionQueue: AttentionItem[] = [
  {
    id: 'a1',
    brandName: 'Aster Skin',
    actionRequired: 'Upload revised Reel',
    urgency: 'now',
    isUrgent: true,
  },
  {
    id: 'a2',
    brandName: 'Morrow Coffee',
    actionRequired: 'Approval pending for 3 days',
    urgency: 'waiting',
    isUrgent: false,
    actionAffordance: 'Send follow-up'
  },
  {
    id: 'a3',
    brandName: 'North & Pine',
    actionRequired: 'First draft due Friday',
    urgency: 'next',
    isUrgent: false,
  }
];

export const activeProduction: ActiveProductionData = {
  brandName: 'Aster Skin',
  campaignTitle: 'Barrier Repair Launch',
  deliverable: '30-second Instagram Reel',
  deadline: 'Today at 6:00 PM',
  revision: '1 of 2',
  usageRights: '90-day paid social usage',
  paymentTerms: 'Net 30',
  dealValue: 850,
  brandFeedback: 'Reduce the product close-up and adjust the lighting.',
  currentStage: 'review'
};

export const campaigns: Campaign[] = [
  {
    id: 'c1',
    brandName: 'Aster Skin',
    deliverableFormat: '30s Instagram Reel',
    stage: 'review',
    deadline: 'Today, 6:00 PM',
    dealValue: 850,
    paymentStatus: 'pending'
  },
  {
    id: 'c2',
    brandName: 'Morrow Coffee',
    deliverableFormat: 'Cold Brew Sensory TikTok',
    stage: 'approval-pending',
    deadline: 'Past Due (3d)',
    dealValue: 1200,
    paymentStatus: 'pending'
  },
  {
    id: 'c3',
    brandName: 'North & Pine',
    deliverableFormat: 'Lookbook Carousel',
    stage: 'drafting',
    deadline: 'Friday, 12:00 PM',
    dealValue: 600,
    paymentStatus: 'pending'
  }
];

export const paymentLedger: PaymentRecord[] = [
  {
    id: 'p1',
    brandName: 'Sola Active',
    invoiceNumber: 'INV-042',
    amount: 800,
    dueDate: 'Oct 31',
    status: 'pending'
  },
  {
    id: 'p2',
    brandName: 'Lumina Tech',
    invoiceNumber: 'INV-041',
    amount: 3500,
    dueDate: 'Oct 05',
    status: 'overdue'
  },
  {
    id: 'p3',
    brandName: 'Forma Wellness',
    invoiceNumber: 'INV-040',
    amount: 1150,
    dueDate: 'Sep 28',
    status: 'paid'
  }
];
