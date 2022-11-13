import {useUser} from '@auth0/nextjs-auth0';

const PrivatePage = () => {
  const {user, error, isLoading} = useUser();

  if (!user) {
    return <p className="font-note">ログインが必要です</p>;
  }

  return (
    <section className="min-h-screen w-full">
      <h2 className="text-2xl">PrivatePage</h2>
      <p className="font-inter">Only loggined user can see</p>
    </section>
  );
};

export default PrivatePage;
