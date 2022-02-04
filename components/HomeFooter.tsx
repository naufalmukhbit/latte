import {FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaTelegramPlane, FaSpotify, FaReddit, FaEnvelope} from "react-icons/fa"

export default function Footer() {
  const iconStyle: string = "cursor-pointer text-slate-300 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white transition";
	return (
		<div className="flex flex-col items-center py-16 gap-6">
      <span className="text-xl font-bold">Follow me on the internet!</span>
      <div className="flex flex-row gap-4 text-4xl pt-2 pb-4">
        <a href="https://instagram.com/paymukh" target="_blank" rel="noreferrer">
          <FaInstagram className={iconStyle} />
        </a>
        <a href="https://twitter.com/paymukh" target="_blank" rel="noreferrer">
          <FaTwitter className={iconStyle} />
        </a>
        <a href="https://github.com/naufalmukhbit" target="_blank" rel="noreferrer">
          <FaGithub className={iconStyle} />
        </a>
        <a href="https://linkedin.com/in/naufalmukhbit" target="_blank" rel="noreferrer">
          <FaLinkedin className={iconStyle} />
        </a>
        <a href="https://t.me/paymukh" target="_blank" rel="noreferrer">
          <FaTelegramPlane className={iconStyle} />
        </a>
        <a href="https://open.spotify.com/user/nopaymukhbit" target="_blank" rel="noreferrer">
          <FaSpotify className={iconStyle} />
        </a>
        <a href="https://reddit.com/u/Orbitox" target="_blank" rel="noreferrer">
          <FaReddit className={iconStyle} />
        </a>
        <a href="mailto:nmukhbit@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className={iconStyle} />
        </a>
      </div>
      <span className="text-xs text-gray-400">&copy;Naufal Mukhbit 2022</span>
    </div>
	);
}
