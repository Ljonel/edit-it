import React from "react";
import { useForm } from "react-hook-form";
import { FormContainer } from "./ProfileStyled";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

//

export default function Profile() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmitForm = async (values: any) => {
    const config: AxiosRequestConfig = {
      url: "/api/createprofile",
      data: values,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);
    console.log(res);
    console.log(values);
    if (res.status === 200) {
      router.reload();
    }
  };
  return (
    <>
      <button onClick={() => signOut()}>Wyloguj</button>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            {...register("name", { required: true })}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            {...register("city", { required: true })}
          />
          <input
            type="text"
            name="stuff"
            placeholder="Programs"
            {...register("stuff")}
          />
          <input
            type="text"
            name="salary"
            placeholder="Enter your minimum salary"
            {...register("salary")}
          />
          <input
            type="text"
            name="facebook"
            placeholder="Facebook"
            {...register("facebook")}
          />
          <input
            type="text"
            name="instagram"
            placeholder="instagram"
            {...register("instagram")}
          />
          <textarea
            placeholder="Bio *"
            {...register("bio", { required: true })}
          ></textarea>
          <button type="submit">Potwierdź</button>
        </form>
      </FormContainer>
    </>
  );
}
