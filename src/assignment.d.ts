type User = {
  useId?: string;
  userName: string;
  email: string;
  password: string;
  profile_pic?: string;
  contactNumber?: string;
};

type Task = {
  id?: string;
  name: string;
  stage: number;
  created_by?: User;
  created_at?: string;
  updated_at?: string;
};
