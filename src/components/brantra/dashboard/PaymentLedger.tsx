import { PaymentRecord } from '../../../types/dashboard.ts';
import { StatusMark } from './StatusMark.tsx';

export function PaymentLedger({ payments }: { payments: PaymentRecord[] }) {
  if (!payments || payments.length === 0) return null;

  return (
    <section className="mb-12 animate-reveal stagger-4">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-ink">Payment ledger</h2>
        <p className="text-sm text-muted">Recent invoices and expected incoming payments.</p>
      </div>

      <div className="border border-rule bg-paper">
        {/* Header row - desktop only */}
        <div className="hidden md:flex items-center py-3 px-4 border-b border-rule bg-canvas">
          <div className="flex-1 text-xs font-medium uppercase tracking-wider text-muted">Brand</div>
          <div className="flex-[0.5] text-xs font-medium uppercase tracking-wider text-muted">Invoice</div>
          <div className="flex-1 text-xs font-medium uppercase tracking-wider text-muted">Due Date</div>
          <div className="flex-1 text-xs font-medium uppercase tracking-wider text-muted">Amount</div>
          <div className="flex-[0.5] text-xs font-medium uppercase tracking-wider text-muted text-right">Status</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-rule/50">
          {payments.map((payment) => (
            <div 
              key={payment.id} 
              className="flex flex-col md:flex-row md:items-center p-4 hover:bg-canvas transition-row group"
            >
              <div className="flex justify-between md:hidden mb-2">
                <span className="text-sm font-medium text-ink">{payment.brandName}</span>
                <span className="text-sm font-medium text-ink">${payment.amount.toLocaleString()}</span>
              </div>
              
              <div className="hidden md:block flex-1 min-w-0 pr-4">
                <span className="text-sm font-medium text-ink truncate block">{payment.brandName}</span>
              </div>
              
              <div className="hidden md:block flex-[0.5] min-w-0 pr-4">
                <span className="text-sm text-muted font-mono">{payment.invoiceNumber}</span>
              </div>

              <div className="flex justify-between md:flex-1 items-center md:items-start min-w-0 md:pr-4 mb-2 md:mb-0">
                <span className="text-sm text-muted md:hidden">Due:</span>
                <span className="text-sm text-ink">{payment.dueDate}</span>
              </div>

              <div className="hidden md:block flex-1 min-w-0 pr-4">
                <span className="text-sm font-medium text-ink">${payment.amount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between md:justify-end md:flex-[0.5] items-center">
                <span className="text-sm text-muted md:hidden">Status:</span>
                <StatusMark status={payment.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
