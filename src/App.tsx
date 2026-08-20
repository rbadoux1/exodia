import { Moon, Sun } from 'lucide-react'
import { useAppStore } from '@/stores/app-store'
import { Button } from '@/components/ui/button'
import headCard from '@/cards/exodia-head.jpg'
import leftArmCard from '@/cards/exodia-left-arm.jpg'
import rightArmCard from '@/cards/exodia-right-arm.jpg'
import leftLegCard from '@/cards/exodia-left-leg.jpg'
import rightLegCard from '@/cards/exodia-right-leg.jpg'

function PieceCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-40 overflow-hidden rounded-xl border-2 border-dashed border-muted-foreground/30 sm:w-48">
      <img src={src} alt={alt} className="aspect-[3/4] w-full object-cover" />
    </div>
  )
}

export default function App() {
  const { theme, toggleTheme } = useAppStore()

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="shrink-0 border-b">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
          <h1 className="text-lg font-semibold">Exodia</h1>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PieceCard src={rightArmCard} alt="Right Arm of the Forbidden One" />
          <PieceCard src={headCard} alt="Exodia the Forbidden One" />
          <PieceCard src={leftArmCard} alt="Left Arm of the Forbidden One" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PieceCard src={rightLegCard} alt="Right Leg of the Forbidden One" />
          <PieceCard src={leftLegCard} alt="Left Leg of the Forbidden One" />
        </div>
      </main>
    </div>
  )
}
