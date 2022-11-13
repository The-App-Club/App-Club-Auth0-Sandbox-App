- Reference

  - [Next.js と Auth0 で会員制メディアを作る【2. ページ作成編】](https://blog.microcms.io/membership-media-02)

- Memo
  - このフックは前提の模様 nodejs のコンテキストでしか動かない "ssr: false" みたいなものはない
  - "next export"して静的資産でサーブするとこけるので、nodejs なランタイム(CloudRun や Lambda,Vercel,Netlify)でサーブしてあげる

```
import {useUser} from '@auth0/nextjs-auth0';
const {user, error, isLoading} = useUser();
```
