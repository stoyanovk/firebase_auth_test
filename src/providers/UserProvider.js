import React, { createContext } from "react";
import { auth, generateUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const responseUser = await generateUserDocument(userAuth);

      setUser(responseUser);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
export default UserProvider;
