import { MMKV } from 'react-native-mmkv';
const mmkv = new MMKV();
export const saveAttendance = (
  student: Record<string, any>,
  status: string,
  image: string
) => {
  const record = {
    ...student,
    time: new Date().toLocaleString(),
    status,
    image,
  };

  const existing = mmkv.getString('attendance');
  const attendance = existing ? JSON.parse(existing) : [];
  attendance.push(record);
  mmkv.set('attendance', JSON.stringify(attendance));
};
