'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

interface CertState {
  img: string;
  title: string;
}

interface UiContextValue {
  commandOpen: boolean;
  setCommandOpen: (open: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  cert: CertState | null;
  openCert: (img: string, title: string) => void;
  closeCert: () => void;
}

const UiContext = createContext<UiContextValue>({
  commandOpen: false,
  setCommandOpen: () => {},
  mobileOpen: false,
  setMobileOpen: () => {},
  cert: null,
  openCert: () => {},
  closeCert: () => {},
});

export function useUi(): UiContextValue {
  return useContext(UiContext);
}

export function UiProvider({ children }: { children: ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cert, setCert] = useState<CertState | null>(null);

  const openCert = useCallback((img: string, title: string) => {
    setCert({ img, title });
  }, []);

  const closeCert = useCallback(() => setCert(null), []);

  const value = useMemo(
    () => ({
      commandOpen,
      setCommandOpen,
      mobileOpen,
      setMobileOpen,
      cert,
      openCert,
      closeCert,
    }),
    [commandOpen, mobileOpen, cert, openCert, closeCert]
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
