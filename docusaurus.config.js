// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TAC',
  tagline: 'Documentation for TAC Department',
  url: 'https://nayatel.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dexbiobot', // Usually your GitHub org/user name.
  projectName: 'tac', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dexbiobot/tac/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dexbiobot/tac/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Schedule ',
            position: 'right',
            items: [
              {
                label: '1 May - 15 May 22 📅',
                href: 'https://docs.google.com/spreadsheets/d/168GThhYBJAz4b5LG3Hfv1hB9BbdCKkbcCIqB_FIbI7I/edit#gid=0',
              },
              {
                label: '16 Apr - 30 Apr 22 ',
                href: 'https://docs.google.com/spreadsheets/d/1kZr2hE7clsTb5cTHVIutMYbAbN-kBPQ8apA0MqOkbPw/edit#gid=0',
              },
              {
                label: '1 Apr - 15 Apr 22',
                href: 'https://docs.google.com/spreadsheets/d/1SouqN27j66_8hwcpyMQs20W_xCRKyuTUDx57DCmsG9w/edit#gid=0',
              },
              {
                label: '16 Mar - 31 Mar 22 ',
                href: 'https://docs.google.com/spreadsheets/d/1B8mm5C78GFMT0eRJdYDjuJMpe6z-8uh_Pn5aZ_6VNK8/edit#gid=670833473',
              },
              {
                label: '16 Mar - 31 Mar 22 ',
                href: 'https://docs.google.com/spreadsheets/d/1B8mm5C78GFMT0eRJdYDjuJMpe6z-8uh_Pn5aZ_6VNK8/edit#gid=670833473',
              },
              {
                label: '1 Mar - 15 Mar 22',
                href: 'https://docs.google.com/spreadsheets/d/1muk7mp7eV9wqjnFPzBou8XrF8V-eEDwcpB_NpfML5Xs/edit#gid=0',
              },
              {
                label: '16 Feb - 28 Feb 22',
                href: 'https://docs.google.com/spreadsheets/d/1Sfv9IA1-fnwDpw6aI67tjA-6UFOgLZa4EaNCoFou4NE/edit#gid=0',
              },
              {
                label: '1 Feb - 15 Feb 22',
                href: 'https://docs.google.com/spreadsheets/d/1OOb-ARglzzEXIgwEBNZdebyLQaZVEzjkS9tZsOVO1X8/edit#gid=0',
              },
              {
                label: '16 Jan - 31 Jan 22',
                href: 'https://docs.google.com/spreadsheets/d/1LZi59doHJHY2Ikf4cvlRiSle5SsQ6Q_qUxgs2HWHzkY/edit#gid=0',
              },
              {
                label: '1 Jan - 15 jan 22',
                href: 'https://docs.google.com/spreadsheets/d/1BPAC4aAhuRclIDBNoyZY82KwoXhJClT0Cdf76ORz8GI/edit#gid=0',
              },
              {
                label: '16 Dec - 31 Dec 21',
                href: 'https://docs.google.com/spreadsheets/d/13PS4KxFClN4N1AosZjLUAIFWCbTgBtfu3iL04BPu4VU/edit#gid=0',
              },
              {
                label: '1 Dec - 15 Dec 21',
                href: 'https://docs.google.com/spreadsheets/d/1bO067jSIXc82MdYbM07sbtGcFy8Xx1guYbp87z0mqJg/edit#gid=0',
              },
              {
                label: '16 Nov - 30 Nov 21',
                href: 'https://docs.google.com/spreadsheets/d/1VBewmbFrrkiYQ7brCvj-77p3PnCJogOXPWD8Qcj7lNM/edit#gid=0',
              },
              {
                label: '1 Nov - 15 Nov 21',
                href: 'https://docs.google.com/spreadsheets/d/1vcCVnnp2L7bXxSNBUEBZOnTcj_K1uEKO3MrTe_ufZew/edit#gid=0',
              },
            ],
            
          },
          {
            type: 'dropdown',
            label: 'Sheets',
            position: 'left',
            items: [
              {
                label: 'Spam Generation',
                href: 'https://docs.google.com/spreadsheets/d/1cW5yy324hP-5mh3reZk1qhl2O4P2UE2IFLk8vLg-efQ/edit#gid=0',
              },
              {
                label: 'L2 Credentials',
                href: 'https://docs.google.com/spreadsheets/d/1bthH71O68wYVhx7kqRhFfAL8El-akcFR26NfCCi-9Ok/edit#gid=1233968413',
              },
              {
                label: 'TT3',
                href: 'https://docs.google.com/spreadsheets/d/1bthH71O68wYVhx7kqRhFfAL8El-akcFR26NfCCi-9Ok/edit#gid=428404614',
              },
            ],
            
          },

          
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
         // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://drive.google.com/drive/folders/1Iw0NKuJneexJmTrr3j4-Qz1NF-zR6Dxq',
            label: 'Manuals',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Built with ❤️ by Shoaib Sajid © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
