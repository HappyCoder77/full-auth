import { RequireSuperUser } from "@/components/utils";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return <RequireSuperUser>{children}</RequireSuperUser>;
}
