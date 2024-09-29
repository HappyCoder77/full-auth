import { RequireSuperuser } from "@/components/utils";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return <RequireSuperuser>{children}</RequireSuperuser>;
}
