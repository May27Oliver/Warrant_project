import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/image/logo_TSA.png';
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div id="header" className="layout shadow-headShadow sticky top-0 z-50">
        <div className="wrap lg:justify-between">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src={Logo} width={220} height={90} alt="logo"></Image>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
      <main>{children}</main>
      {/* Footer */}
      <div id="footer" className="layout">
        <div className="container-fluid">
          <div className="flex items-stretch mx-[-10px] bg-[#021d3b]">
            <div className="whitespace-nowrap min-w-[15rem] bg-[#01162c] text-[color:var(--light-blue)] relative items-center py-4 px-0 flex justify-center w-full padpt:flex-[16.666667%] padpt:max-w-[16.666667%]">
              <span className="pl-10 relative pt-1 leading-none tracking-[0.03em] text-[1.1rem] font-semibold before:footer-veiw-icon">
                瀏覽人次
              </span>
              <b className="pt-1 transform scale-75">╱&ensp;</b>
              <small
                className={['text-[0.92em]', 'pt-1', 'font-normal'].join(' ')}
              >
                706,266 人
              </small>
            </div>
            <div className="text-[color:var(--font-white)] w-full text-center flex justify-center py-4 px-2 flex-initial text-white lg:text-left">
              <small className="text-[0.92em] mb-0">
                權證為高槓桿投資商品，有機會在短期間獲得極高報酬或蒙受權利金的損失，購買前請先了解相關風險及詳閱公開說明書。
                <span className="md:block">
                  主辦單位：中華民國證券商業同業公會 | 承辦單位：格威傳媒
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Nav: React.FC = () => {
  const NAV_OPTIONS = [
    {
      title: '最新消息',
      link: '/news',
      fontColor: 'black',
    },
    {
      title: '權證懶人包',
      link: '/lazy-read',
      fontColor: 'black',
    },
    {
      title: '市場統計',
      link: '/rankMain',
      fontColor: 'black',
    },
    {
      title: '模擬交易',
      link: '/tradMain',
      fontColor: '#1b487b',
    },
    {
      title: '買權證抽百萬',
      link: '/lotteryMain',
      fontColor: 'black',
    },
    {
      title: '資源專區',
      link: '/sourceMain',
      fontColor: 'black',
    },
  ];
  return (
    <div className="flex">
      {NAV_OPTIONS.map((option) => (
        <div
          className="text-header flex flex-col justify-center font-medium font-notosan tracking-[0.1em] px-[0.5rem]"
          key={option.title}
          style={{ color: option.fontColor }}
        >
          <Link href={option.link}>{option.title}</Link>
        </div>
      ))}
      <div className="text-header flex flex-col justify-center font-medium font-notosan tracking-[0.1em] px-[0.5rem]">
        <div className='btn text-white cursor-pointer mx-4 "flex flex-col justify-center font-notosan tracking-[0.1em] font-normal bg-[#ff7612] rounded-[50rem]'>
          會員登入
        </div>
      </div>
    </div>
  );
};

export default Layout;
