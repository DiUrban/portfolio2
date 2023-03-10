import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { groq, SanityClient } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

const query = groq`*[_type=="projects"]{...,technologies[]->}`;

type Data = {
  projects: Project[];
};

export default async function NextApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
