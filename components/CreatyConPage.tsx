// import { Stack } from "expo-router";
// import { CreatingContext } from "@/app/(auth)/CreatingContext";
// import { createContext, useState } from "react";

// const creatingCon = createContext()
// export default function AuthLayout() {
//   const [code, setCode] = useState("");
//   const [funco, setFunco] = useState<() => any>(() => () => {});

//   return (
//     <CreatingContext.Provider value={{ funco, setcode: setCode, cody: code }}>
//       <Stack />
//     </CreatingContext.Provider>
//   );
// }
import React, { createContext, useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "expo-router";
// import { useSignUp, useSetActive } from "@clerk/clerk-expo"; // uncomment when using Clerk

type AuthContextType = {
  cody: string;
  setcode: Dispatch<SetStateAction<string>>;
  setonVerifyPress: Dispatch<SetStateAction<()=>Promise<any>>>;
  onVerifyPress : ()=>Promise<any>

};

export const CreatingContext = createContext<AuthContextType>({
  cody: "",
  setcode: () => {},
  setonVerifyPress: async () => {},
  onVerifyPress:async ()=>{}

});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cody, setCody] = useState("");
  const router = useRouter();
  const [funco, setfunco] = useState<()=>Promise<any>>(async()=>{})

  // const { isLoaded, signUp } = useSignUp();
  // const { setActive } = useSetActive();
//   console.log("the Funco ")



  return (
    <CreatingContext.Provider value={{ cody, setcode: setCody, setonVerifyPress:setfunco , onVerifyPress:funco }}>
      {children}
    </CreatingContext.Provider>
  );
};
