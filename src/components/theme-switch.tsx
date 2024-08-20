import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
import { Moon, SunDim } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitch(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  const flipTheme = (): void => {
    const newTheme = isDarkMode ? "light" : "dark";
    console.log(`Current theme: ${theme}, Switching to: ${newTheme}`);
    setTheme(newTheme);
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </>
  );
}
