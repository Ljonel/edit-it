import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function editprofile(req, res) {
  try {
    const { name, bio, phone, city, stuff, salary, facebook, instagram } =
      req.body;

    const session = await getSession({ req });

    if (!session) {
      return res.status(401);
    }

    const profile = await prisma.profile.update({
      where: {
        email: session.user.email,
      },
      data: {
        name,
        email: session.user.email,
        bio,
        phone,
        city,
        stuff,
        salary,
        facebook,
        instagram,
      },
    });
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).send(error);
  }
}
