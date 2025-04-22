import { useParams } from "react-router-dom"


export const Home =() => {
    const {lang} = useParams();

    const content = {
        ko: {
          greeting: '안녕하세요!',
          description: '이것은 한국어 페이지입니다.',
        },
        en: {
          greeting: 'Hello!',
          description: 'This is an English page.',
        },
        jp: {
          greeting: 'こんにちは！',
          description: 'これは日本語のページです。',
        },
      };

      const lang_content = content[lang]

      return(
        <div>
            <p>언어 : {lang}</p>
            <p>인사말 : {lang_content.greeting}</p>
            <p>설명 : {lang_content.description}</p>
        </div>
      )

}