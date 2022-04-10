import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    description: string,
    url: string,
    skills: string[]
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({
        name: "E-Exit Hint Application",
        description: "An interactive android application that generates puzzles as QR codes, allowing users to integrate their escape room experiences with seamless technology.",
        url: "",
        skills: ["Java", "Sqlite", "Android Studio"]
    })
}