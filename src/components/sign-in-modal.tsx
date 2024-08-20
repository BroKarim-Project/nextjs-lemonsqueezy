'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

import { siteConfig } from '@/config/site';
import { Modal } from './modal';
import { useSigninModal } from '@/hooks/use-signin-modal';

import { Icons } from './icons';

export const SignInModal = () => {
  const signInModal = useSigninModal();
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <>
      <Modal showModal={signInModal.isOpen} setShowModal={signInModal.onClose}>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center md:px-16">
            <a href={siteConfig.url}></a>
            <h3 className="font-display text-2xl font-bold">Sign In</h3>
            <p className="text-sm text-gray-500">
              This is strictly for demo purposes - only your email and profile picture will be
              stored.
            </p>
          </div>

          <div className="flex flex-col space-y-4 bg-secondary/50 px-4 py-8 md:px-16">
            <Button
              variant="default"
              disabled={signInClicked}
              onClick={() => {
                setSignInClicked(true);
                signIn('google');
              }}
            >
              <Icons.google className="h-4 w-4" />
              <p>Sign In with Google</p>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
