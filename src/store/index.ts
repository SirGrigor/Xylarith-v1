import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Employee, Skill, PerformanceGoal } from '../types/hr';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface DataState<T> {
  data: T[] | null;
  status: Status;
  error: Error | null;
}

interface AppState {
  // UI State
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  
  // Data States
  employees: DataState<Employee>;
  setEmployees: (data: Employee[]) => void;
  setEmployeesLoading: () => void;
  setEmployeesError: (error: Error) => void;
  
  skills: DataState<Skill>;
  setSkills: (data: Skill[]) => void;
  setSkillsLoading: () => void;
  setSkillsError: (error: Error) => void;
  
  goals: DataState<PerformanceGoal>;
  setGoals: (data: PerformanceGoal[]) => void;
  setGoalsLoading: () => void;
  setGoalsError: (error: Error) => void;
}

const initialDataState = {
  data: null,
  status: 'idle' as Status,
  error: null,
};

export const useStore = create<AppState>()(
  devtools(
    (set) => ({
      // UI State
      sidebarOpen: true,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      
      // Employees State
      employees: initialDataState,
      setEmployees: (data) => set({ 
        employees: { data, status: 'success', error: null } 
      }),
      setEmployeesLoading: () => set({ 
        employees: { ...initialDataState, status: 'loading' } 
      }),
      setEmployeesError: (error) => set({ 
        employees: { data: null, status: 'error', error } 
      }),
      
      // Skills State
      skills: initialDataState,
      setSkills: (data) => set({ 
        skills: { data, status: 'success', error: null } 
      }),
      setSkillsLoading: () => set({ 
        skills: { ...initialDataState, status: 'loading' } 
      }),
      setSkillsError: (error) => set({ 
        skills: { data: null, status: 'error', error } 
      }),
      
      // Goals State
      goals: initialDataState,
      setGoals: (data) => set({ 
        goals: { data, status: 'success', error: null } 
      }),
      setGoalsLoading: () => set({ 
        goals: { ...initialDataState, status: 'loading' } 
      }),
      setGoalsError: (error) => set({ 
        goals: { data: null, status: 'error', error } 
      }),
    }),
    { name: 'hr-store' }
  )
);
