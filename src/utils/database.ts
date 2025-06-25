// utils/database.ts
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export interface AttendanceEntry {
  id: string;
  photoPath: string;
  timestamp: string;
}

const ATTENDANCE_KEY = 'attendance_entries';

// Save one entry
export function storeAttendanceEntry(entry: AttendanceEntry) {
  const existing = getAllAttendanceEntries();
  const updated = [entry, ...existing];
  storage.set(ATTENDANCE_KEY, JSON.stringify(updated));
}

// Fetch all entries
export function getAllAttendanceEntries(): AttendanceEntry[] {
  const stored = storage.getString(ATTENDANCE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.warn('Failed to parse attendance entries:', e);
    return [];
  }
}
