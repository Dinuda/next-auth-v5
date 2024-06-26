"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface BackButtonProps {
  href: string
  label: string
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-notmal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
