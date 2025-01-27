import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { name: string; email: string; avatar?: string };
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    // Mock authentication
    if (email && password) {
      set({
        isAuthenticated: true,
        user: {
          name: 'John Doe',
          email: email,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
        }
      });
    }
  },
  logout: () => set({ isAuthenticated: false, user: null })
}));
