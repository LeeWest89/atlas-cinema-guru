import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../auth";

export default async function checkSession(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth(req, res);

  if (session && session.user) {
    res.status(200).json({ user: session.user });
  } else {
    res.status(401).json({ user: null });
  }
}