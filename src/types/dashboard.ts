export type OperationalMetrics = {
  activeDeals: number;
  awaitingPayment: number;
  paidThisMonth: number;
};

export type AttentionItem = {
  id: string;
  brandName: string;
  actionRequired: string;
  urgency: 'now' | 'waiting' | 'next';
  isUrgent: boolean;
  actionAffordance?: string;
};

export type Campaign = {
  id: string;
  brandName: string;
  deliverableFormat: string;
  stage: 'review' | 'drafting' | 'approval-pending' | 'in-production';
  deadline: string;
  dealValue: number;
  paymentStatus: 'pending' | 'paid' | 'overdue';
};

export type PaymentRecord = {
  id: string;
  brandName: string;
  invoiceNumber: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
};

export type ActiveProductionData = {
  brandName: string;
  campaignTitle: string;
  deliverable: string;
  deadline: string;
  revision: string;
  usageRights: string;
  paymentTerms: string;
  dealValue: number;
  brandFeedback: string;
  currentStage: 'brief' | 'create' | 'review' | 'publish' | 'paid';
};
