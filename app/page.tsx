import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      Only authenticated
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
