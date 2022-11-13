import {cx} from '@emotion/css';
import {useRouter} from 'next/router';

const Home = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen w-full mt-[72px]">
      <div className="max-w-xs mx-auto w-full flex flex-col justify-center items-center gap-4">
        <div
          className={cx(
            'w-full min-h-[6rem] border-2 p-2 shadow-md',
            `hover:cursor-pointer hover:shadow-xl hover:translate-y-2 transition-transform`
          )}
          onClick={(e) => {
            router.push({
              pathname: '/public',
            });
          }}
        >
          <h2 className="font-noto text-3xl">
            劇場版 ヴァイオレット・エヴァーガーデン
          </h2>
          <p className="font-inter text-gray-600 break-words line-clamp-2">
            Looooooooooooooooooooooooooooooooooooooooooooooooooooooooong
            Something description...
          </p>
          <div className="flex items-center justify-end w-full">
            <span className="font-noto text-lg font-bold bg-gray-300 rounded-md p-1">
              一般公開
            </span>
          </div>
        </div>
        <div
          className={cx(
            'w-full min-h-[6rem] border-2 p-2 shadow-md',
            `hover:cursor-pointer hover:shadow-xl hover:translate-y-2 transition-transform`
          )}
          onClick={(e) => {
            router.push({
              pathname: '/private',
            });
          }}
        >
          <h2 className="font-noto text-3xl">
            劇場版シティーハンター 〈新宿プライベート・アイズ〉
          </h2>
          <p className="font-inter text-gray-600 break-words line-clamp-2">
            Something description...
          </p>
          <div className="flex items-center justify-end w-full">
            <span className="font-noto text-lg font-bold bg-stone-200 rounded-md p-1">
              限定公開
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
