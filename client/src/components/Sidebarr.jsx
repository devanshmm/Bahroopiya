import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { LayoutDashboard, Mic, AudioLines, Copy } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
//import { useAuth } from '@/context/AuthContext'

const items = [
  { title: 'Dashboard', url: '/me', icon: LayoutDashboard },
  { title: 'Explore Voices', url: '/voices/explore', icon: Mic },
  { title: 'Text to Speech', url: '/tts', icon: AudioLines },
  { title: 'Voice Cloning', url: '/voices/clone', icon: Copy },
]

export default function AppSidebar() {
  //hardcoded it change krlo ye baad m 
  const user = { firstName: 'Devansh', lastName: 'Mishra', email: 'devansh@example.com' }
const logout = () => {}
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Sidebar>
      {/* Logo + Name */}
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <AudioLines className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">BAHROOPIYA</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Button */}
      <SidebarFooter className="p-4 border-t">
        <div
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer"
          onClick={handleLogout}
        >
          <div className="w-8 h-8 rounded-full bg-muted-foreground/20 flex items-center justify-center">
            <span className="text-sm font-medium">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}