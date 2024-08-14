"use client";
import Logo from "../../_components/../../_components/Logo";
import { db } from "../../../../config/firebaseConfig";
import {
  OrganizationSwitcher,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";

function Header() {
  const { orgId } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    user && saveUserData();
  }, [user]);

  /**
   * Used to save user data
   */
  const saveUserData = async () => {
    const docId = user?.primaryEmailAddress?.emailAddress;
    try {
      await setDoc(doc(db, "LoopUsers", docId), {
        name: user?.fullName,
        avatar: user?.imageUrl,
        email: user?.primaryEmailAddress?.emailAddress,
      });
    } catch (e) {}
  };
  return (
    <div className="relative h-16 p-3 shadow-sm">
      {/* Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      ></div>

      {/* Header Content */}
      <div className="relative flex justify-between items-center h-full">
        <Logo />

        <OrganizationSwitcher
          afterLeaveOrganizationUrl={"/dashboard"}
          afterCreateOrganizationUrl={"/dashboard"}
        />
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
