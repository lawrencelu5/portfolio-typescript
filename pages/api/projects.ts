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
        description: "An interactive android application that generates information and exports them via QR codes, so users can gather clues, notes, and answers in the E-EXIT escape rooms.",
        url: "",
        skills: []
    })
}