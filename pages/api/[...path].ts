import type { NextApiRequest, NextApiResponse } from "next"
import { serverEntrypoint } from "../../module/lib/server/server-entrypoint"
import { autoroute } from "../../algos/simple-grid"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return serverEntrypoint(req, res, {
    solver: autoroute,
    solverName: "simple-grid",
  })
}
