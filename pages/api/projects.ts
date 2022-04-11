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
        description: "An interactive android application that generates clues and hints via QR codes, empowering escape rooms with augmented reality.",
        url: "",
        skills: ["Java", "Sqlite", "Android Studio"]
    })
}