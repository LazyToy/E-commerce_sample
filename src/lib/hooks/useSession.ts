'use client';

import { useEffect, useState } from 'react';

type SessionUser = { email: string; name: string } | null;

export function useSession() {
  const [user, setUser] = useState<SessionUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (!res.ok) {
          if (active) setUser(null);
          return;
        }
        const data = await res.json();
        if (active) setUser(data.user ?? null);
      } catch {
        if (active) setUser(null);
      } finally {
        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return { user, loading, isAuthenticated: !!user };
}
