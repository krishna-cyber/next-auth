/** @format */
"use client";
import { useForm } from "react-hook-form";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //onsubmit function for form
  const onSubmit = (data) => console.log(data);

  if (session) {
    console.log(session);
    return (
      <>
        Signed in as {session.user.email} <br />
        name of user is {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn("google")}>Sign in</button>
        {/* button for credential login next auth */}
        <button
          onClick={() =>
            signIn("credentials", {
              email: "something@gmail.com",
              password: "some password",
            })
          }>
          Sign in with credential
        </button>
      </>
    );
  }
}
