import React from "react";
import { FormWrapper } from "./DisplayProfileStyled";
import { useForm } from "react-hook-form";
import { FormContainer } from "./CreateProfileStyled";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function DisplayEditProfile({ profile, setEditProfile }: any) {
  const { register, handleSubmit } = useForm({ defaultValues: profile });
  const router = useRouter();

  const onSubmitForm = async (values: any) => {
    const config: AxiosRequestConfig = {
      url: "/api/editprofile",
      data: values,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);
    console.log(res);
    console.log(values);
    setEditProfile(false);
    if (res.status === 200) {
      router.reload();
    }
  };

  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-element">
            <label htmlFor="name">imie</label>
            <input
              type="text"
              name="name"
              placeholder={profile.name}
              {...register("name")}
            />
          </div>

          <div className="form-element">
            <label htmlFor="name">Miasto</label>
            <input
              type="text"
              name="city"
              placeholder={profile.city}
              {...register("city")}
            />
          </div>
          <div className="form-element">
            <label htmlFor="name">Telefon</label>
            <input
              type="number"
              name="phone"
              placeholder={profile.phone}
              {...register("phone")}
            />
          </div>
          <div className="form-element">
            <label htmlFor="name">Stawka minimalna</label>
            <input
              type="text"
              name="salary"
              placeholder={profile.salary}
              {...register("salary")}
            />
          </div>
          <div className="form-element">
            <label htmlFor="name">Programy</label>
            <input
              type="text"
              name="stuff"
              placeholder={profile.stuff}
              {...register("stuff")}
            />
          </div>
          <div className="form-element">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              name="facebook"
              placeholder={profile.facebook}
              {...register("facebook")}
            />
          </div>
          <div className="form-element">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              name="instagram"
              placeholder={profile.instagram}
              {...register("instagram")}
            />
          </div>
          <div className="form-element">
            <label htmlFor="name">Bio</label>
            <input
              type="text"
              name="bio"
              placeholder={profile.bio}
              {...register("bio")}
            />
          </div>
          <button>Potwierdź zmiany</button>
        </form>
      </FormWrapper>
    </>
  );
}
