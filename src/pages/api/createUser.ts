import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, name, lastname, email } = req.body;

  try {
    await prisma.user.create({
      data: {
        username,
        name,
        lastname,
        email,
      },
    });
    res.status(200).json({ message: "User created" });
  } catch (error) {
    console.log("Failure", error);
  }
}
