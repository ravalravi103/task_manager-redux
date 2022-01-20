import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useUser = () => {
  const [localuser, setlocalUser] = useState(undefined);
  const { accessToken, user } = useSelector((state: any) => state.userReducers);

  useEffect(() => {
    setlocalUser(user);
  }, [accessToken, user]);

  return [localuser];
};
