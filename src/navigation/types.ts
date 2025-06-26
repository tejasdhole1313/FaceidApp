export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  SummaryScreen: undefined;
  Leaves: undefined;
  Info: undefined;
  Salary: undefined;
  Notification: undefined;
  Activity:undefined;
  CheckIn: undefined;
  Attendance: { checkedInDate: string };

  
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
  OTPVerification: { phoneNumber: string };
  Notification: undefined;
 
};


export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Notification:undefined,
 
}; 