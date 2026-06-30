import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/components/Sidebarr.jsx'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const quickActions = [
  { label: 'Narrate Story', color: 'bg-green-200 text-green-700 hover:bg-green-300' },
  { label: 'Record an Ad', color: 'bg-red-200 text-red-700 hover:bg-red-300' },
  { label: 'Movie Scene', color: 'bg-purple-200 text-purple-700 hover:bg-purple-300' },
  { label: 'Game Voice', color: 'bg-yellow-200 text-yellow-700 hover:bg-yellow-300' },
  { label: 'Podcast Intro', color: 'bg-blue-200 text-blue-700 hover:bg-blue-300' },
  { label: 'Meditation', color: 'bg-teal-200 text-teal-700 hover:bg-teal-300' },
]

const MAX_CHARS = 5000

function Dashboard() {
  const [text, setText] = useState('')

  const handleQuickAction = (label) => {
    setText(`Write a ${label.toLowerCase()} script here...`)
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center gap-2 p-4 border-b">
            <SidebarTrigger />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-8 space-y-6">

            {/* Wavy banner */}
            <div className="w-full h-32 rounded-2xl bg-gradient-to-r from-teal-100 via-green-100 to-cyan-100 flex items-center justify-center overflow-hidden relative">
              <svg viewBox="0 0 900 100" className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,50 C150,100 350,0 500,50 C650,100 750,0 900,50 L900,100 L0,100 Z" fill="rgba(255,255,255,0.4)" />
              </svg>
              <span className="text-teal-600 font-medium text-lg z-10">Your voice, amplified.</span>
            </div>

            {/* Greeting */}
            <div>
              <p className="text-muted-foreground">Nice to see you,</p>
              <h1 className="text-4xl font-bold">Devansh</h1>
            </div>

            {/* Text area */}
            <div className="relative">
              <Textarea
                placeholder="Start typing or paste text here..."
                className="min-h-36 resize-none rounded-2xl border-2 border-pink-200 focus:border-pink-400 text-base p-4"
                value={text}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_CHARS) setText(e.target.value)
                }}
              />
              <span className="absolute bottom-3 right-4 text-sm text-muted-foreground">
                {text.length} / {MAX_CHARS.toLocaleString()} chars
              </span>
            </div>

            {/* Quick actions */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.label)}
                    className={`${action.color} rounded-2xl py-4 px-6 font-medium transition-colors text-sm`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate button */}
            <Button className="w-full rounded-2xl py-6 text-base" size="lg">
              Generate Speech
            </Button>

          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Dashboard