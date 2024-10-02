import { RequireLocalManager } from "@/components/utils";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return <RequireLocalManager>{children}</RequireLocalManager>;
}
