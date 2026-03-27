import type {
	CommentConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Yumrith",
	subtitle: "Yuma Shintani",
	lang: "ja", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/freepik__adjust__34938.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			// <a href="https://www.freepik.com/free-ai-image/anime-night-sky-illustration_249236735.htm#fromView=search&page=1&position=37&uuid=b69fab19-0559-4f5f-8b63-f7f55c13693a&query=4k+wallpaper+anime+sky">Image by freepik</a>
			enable: true, // Display the credit text of the banner image
			text: "Image by freepik", // Credit text to be displayed
			url: "https://www.freepik.com/free-ai-image/anime-night-sky-illustration_249236735.htm#fromView=search&page=1&position=37&uuid=b69fab19-0559-4f5f-8b63-f7f55c13693a&query=4k+wallpaper+anime+sky", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.About,
		LinkPreset.Archive,
		LinkPreset.Work,
		LinkPreset.Awards,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Yuma Shintani",
	bio: "社会人7年目のエンジニアです。ゲーム関連会社にて社内システムの検証・自動テスト開発を担当しています。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/yuma-shin",
		},
		{
			name: "GitHub (Work)",
			icon: "fa6-brands:github",
			url: "https://github.com/yuma-shintani",
		},
		{
			name: "Qiita",
			icon: "simple-icons:qiita",
			url: "https://qiita.com/y-shin",
		},
		{
			name: "Ollama",
			icon: "simple-icons:ollama",
			url: "https://ollama.com/yuma",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
  giscus: {
    repo: 'yuma-shin/yumrith',
    repoId: 'R_kgDORyb2TQ',
    category: 'Announcements',
    categoryId: 'DIC_kwDORyb2Tc4C5aYe',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: 'reactive',
    lang: 'ja',
    loading: 'lazy',
  },
}