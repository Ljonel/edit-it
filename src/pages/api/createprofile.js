import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function createProfile(req, res) {
  try {
    const { name, bio, phone, city, stuff, salary, facebook, instagram } =
      req.body;

    const session = await getSession({ req });

    if (!session) {
      return res.status(401);
    }

    const profile = await prisma.profile.create({
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
        user: { connect: { email: session.user.email } },
      },
    });
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).send(error);
  }
}
