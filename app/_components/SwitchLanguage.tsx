import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    setCurrentLanguage(newLanguage);
    // Ajoutez ici le code pour mettre à jour votre application avec la nouvelle langue
  };

  return (
    <div className="flex items-center">
      <span className="fr pr-2">FR</span>
      <Switch id="language-switcher" onClick={toggleLanguage} /><span className="en pl-2">EN</span>
      <Label htmlFor="language-switcher"></Label>
    </div>
  );
}
// {currentLanguage === 'fr' ? 'FR' : 'EN'}