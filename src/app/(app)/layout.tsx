import { AppShell } from '../../components/brantra/shell/AppShell.tsx';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
