import * as React from "react";
import { cn } from "../../lib/utils";

export function NavigationMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn("flex items-center", className)} {...props} />;
}

export function NavigationMenuList({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("flex items-center gap-2", className)} {...props} />;
}

export function NavigationMenuItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn("", className)} {...props} />;
}
