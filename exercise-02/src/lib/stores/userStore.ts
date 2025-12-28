// src/lib/stores/userStore.ts
import { UserProfile } from '@/lib/api/user';

interface UserState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// Simple store implementation (could use Zustand in real app)
let userState: UserState = {
  user: null,
  isLoading: false,
  error: null,
  setUser: (user) => { userState.user = user; },
  setLoading: (loading) => { userState.isLoading = loading; },
  setError: (error) => { userState.error = error; }
};

export const useUserStore = () => userState;