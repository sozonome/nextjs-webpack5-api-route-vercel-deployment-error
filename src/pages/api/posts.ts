import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

import initMiddleware from "../../lib/init-middleware";
import { getSortedPostsData } from "../../lib/posts";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allProjectsData = getSortedPostsData();

  await cors(req, res);

  res.statusCode = 200;
  res.json(allProjectsData);
};
