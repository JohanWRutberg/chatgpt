"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import React from "react";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    });

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
