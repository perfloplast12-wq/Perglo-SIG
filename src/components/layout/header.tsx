import { logoutAction } from "@/actions/auth";
import type { Role } from "@/types";
import { getHeaderData } from "@/services/header";
import { PwaInstallPrompt } from "../pwa/pwa-install-prompt";
import { HeaderTools } from "./header-tools";
import { ThemeToggle } from "./theme-toggle";

export async function Header({ user }: { user: { id: string; name: string; email: string; role: Role } }) {
  const headerData = await getHeaderData(user);
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-20 border-b bg-background/88 px-3 py-3 backdrop-blur-xl sm:px-4 lg:px-8">
      <div className="flex items-center justify-end gap-2 sm:justify-start sm:gap-3">
        <HeaderTools notifications={headerData.notifications} searchItems={headerData.searchItems} />
        <PwaInstallPrompt />
        <ThemeToggle />
        <div className="flex shrink-0 items-center gap-1 rounded-full border bg-card p-1 md:gap-3 md:py-1.5 md:pl-2 md:pr-4">
          <div className="grid size-8 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">{initials}</div>
          <div className="hidden md:block">
            <p className="text-sm font-medium leading-4">{user.name}</p>
            <p className="text-xs text-muted">{user.role}</p>
          </div>
          <form action={logoutAction}>
            <button className="rounded-full px-2 py-1 text-xs font-medium text-muted transition hover:bg-card-muted hover:text-foreground md:ml-1" type="submit">
              Salir
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
