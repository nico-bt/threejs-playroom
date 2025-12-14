import Link from "next/link"

function Footer() {
  return (
    <footer className="w-full">
      <ul className="flex flex-row gap-4 py-6 bg-black justify-center text-gray-200">
        <li>
          <Link
            href={"https://www.linkedin.com/in/nico-battaglia/"}
            target="_blank"
            className="underline-offset-4 underline"
          >
            LinkedIn
          </Link>
        </li>
        <li>ncl.battaglia@gmail.com</li>
        <li>
          <Link
            href={"https://github.com/nico-bt"}
            target="_blank"
            className="underline-offset-4 underline"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
