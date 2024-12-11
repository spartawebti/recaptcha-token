"use client"

import { useEffect } from "react";

export default function Home() {
  const handleRecaptcha = async () => {
    const token = await grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });
    console.log('reCAPTCHA Token:', token);

  };

  useEffect(() => {
    grecaptcha.ready(() => {
      handleRecaptcha();
    });
  }, []);
  return (
    <div >
     
    </div>
  );
}
