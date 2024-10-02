import { RequireSponsor } from "@/components/utils";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return <RequireSponsor>{children}</RequireSponsor>;
}
