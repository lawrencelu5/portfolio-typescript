import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const CustomError: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Image
        objectFit="contain"
        width={500}
        height={300}
        src="/images/error-404.svg"
        alt="404 error"
      />

      <h2 className="text-2xl font-semibold">
        The page you're looking for doesn't exist.
      </h2>
      <p className="text-center"></p>

      <Link href="/">
        <a className="py-6">Back to Home</a>
      </Link>
    </div>
  )
}

export default CustomError
