"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#343541] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://pixabay.com/get/gdc34dd21424a001c816c6073e0db6396a10f87d535414c9fdd4b493f816ea025fa8f031bb6b5650b340cd296e32d794a3a8544f7756c288d768b88ffc96ccfbc_1280.png"
        width={1000}
        height={500}
        alt="logo"
      />
      <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">
        Sign in to use Chat GPT
      </button>
    </div>
  );
}
/* https://links.papareact.com/2i6  */
export default Login;
