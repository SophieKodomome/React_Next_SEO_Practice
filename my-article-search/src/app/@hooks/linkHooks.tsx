import { useRouter } from "next/navigation";

export function useGoTo() {
  const router = useRouter();

  const goTo = (link: string) => {
    router.push(link);
  };

  return goTo;
}
