import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchLanguage() {
  return (
    <div className="flex items-center space-x-2">
     <span>FR</span><Switch id="airplane-mode"/><span>EN</span>
      {/* <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
    </div>
  )
}
