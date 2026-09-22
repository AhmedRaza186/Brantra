interface StatusMarkProps {
  status: string;
}

export function StatusMark({ status }: StatusMarkProps) {
  let colors = 'text-text-secondary bg-surface-secondary';
  
  if (status === 'Review' || status === 'OVERDUE') {
    colors = 'text-urgent bg-urgent/10';
  } else if (status === 'PAID' || status === 'In Production') {
    colors = 'text-completed bg-completed/10';
  } else if (status === 'Approval Pending' || status === 'Drafting') {
    colors = 'text-waiting bg-waiting/10';
  } else if (status === 'PENDING') {
    colors = 'text-text-secondary bg-surface-secondary';
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-sm ${colors}`}>
      {status}
    </span>
  );
}
