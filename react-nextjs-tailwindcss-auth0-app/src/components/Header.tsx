import {useUser, UserProfile} from '@auth0/nextjs-auth0';
import {css} from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = () => {
  const router = useRouter();
  const {user, error, isLoading} = useUser(); // SSR このフックは前提の模様 nodejsのコンテキストでしか動かない ssr: falseみたいなものはない

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const renderNavContent = (user: UserProfile | undefined) => {
    if (user) {
      return (
        <div className="flex items-center gap-2">
          <span>{`Welcome ${user.name}!`}</span>
          <button
            className={`px-6 py-2 h-[3rem] bg-blue-500 hover:bg-blue-800 text-white text-lg rounded-md hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-300`}
            onClick={(e) => {
              router.push('/api/auth/logout');
            }}
          >
            Logout
          </button>
        </div>
      );
    }
    return (
      <button
        className={`px-6 py-2 h-[3rem] bg-blue-500 hover:bg-blue-800 text-white text-lg rounded-md hover:cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-300`}
        onClick={(e) => {
          router.push('/api/auth/login');
        }}
      >
        Login
      </button>
    );
  };

  return (
    <header
      className={`w-full min-h-[60px] bg-gradient-to-r from-sky-700 to-amber-200 px-2`}
    >
      <nav className="flex justify-between items-center">
        {/* <picture
          className={`hover:cursor-pointer`}
          onClick={(e) => {
            router.push('/');
          }}
        >
          <source srcSet={`/assets/logo.webp`} type={`image/webp`} />
          <img src={'/assets/logo.webp'} alt={'logo'} width={60} height={60} />
        </picture> */}
        <Image
          alt="logo"
          src={'/assets/logo.webp'}
          width={60}
          height={60}
          className={`hover:cursor-pointer`}
          onClick={(e) => {
            router.push('/');
          }}
        />
        {renderNavContent(user)}
      </nav>
    </header>
  );
};

export default Header;
