import React from "react";
import DisplayEditProfile from "./DisplayEditProfile";
import { DisplayProfileDatas } from "./DisplayProfileStyled";
export default function DisplayProfile({
  profile,
  setEditProfile,
  editProfile,
}: any) {
  console.log(profile);

  return (
    <>
      {editProfile ? (
        <DisplayEditProfile profile={profile} setEditProfile={setEditProfile} />
      ) : (
        <DisplayProfileDatas>
          <ul>
            <li>Id: {profile.id}</li>
            <li>Imie:{profile.name}</li>
            <li>Email:{profile.email}</li>
            <li>Miasto:{profile.city}</li>
            <li>Phone:{profile.phone}</li>
            <li>Minimum salary:{profile.salary}</li>
            <li>Stuff:{profile.stuff}</li>
            <li>Fb:{profile.facebook}</li>
            <li>Insta:{profile.instagram}</li>
            <li>Bio:{profile.bio}</li>
            <button onClick={() => setEditProfile(true)}>Edytuj profil</button>
          </ul>
        </DisplayProfileDatas>
      )}
    </>
  );
}
