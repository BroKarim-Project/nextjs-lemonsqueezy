'use client';

import { SignInModal } from './sign-in-modal';
import { useMounted } from '@/hooks/use-mounted';

export const ModalProvider = () => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SignInModal />
    </>
  );
};
