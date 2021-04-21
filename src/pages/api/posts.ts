import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

import initMiddleware from "lib/init-middleware";
import { getSortedPostsData } from "lib/posts";
import { PostType } from "types/post";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allProjectsData: Array<PostType> = getSortedPostsData();

  await cors(req, res);

  res.statusCode = 200;
  res.json(allProjectsData);
};
