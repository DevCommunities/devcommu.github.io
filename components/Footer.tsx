import { FaYoutube, FaDiscord, FaGithub, FaFacebook } from "react-icons/fa";

export default function DefaultFooter() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-2">
        <ul className="mb-2 mt-2 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.youtube.com/@devcommu"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Youtube</span>
              <FaYoutube className="h-12 w-12" />
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Discord</span>
              <FaDiscord className="h-12 w-12" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/DevCommunities"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Github</span>
              <FaGithub className="h-12 w-12" />
            </a>
          </li>

          <li>
            <a
              href="https://web.facebook.com/DevCommu/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-12 w-12" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
