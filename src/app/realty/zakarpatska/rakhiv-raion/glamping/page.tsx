import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Затишні глемпінги у Рахівському районі для активного відпочинку | Мої Карпати",
  description:
    "Відчуйте магію природи у глемпінгах Рахівського району Карпат! Наші затишні намети поєднують комфорт і автентичність, дозволяючи вам насолоджуватися красою гір і чистим повітрям. Ідеальне місце для романтичного відпочинку або активних пригод. Забронюйте свій глемпінг зараз і відкрийте для себе унікальний спосіб провести час на природі!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/rakhiv-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Куполи у Рахівському районі" },
          { raion: "/rakhiv-raion", type: "glamping" },
        ]}
        secondFilter={[
          { title: "Житло у Рахівському районі" },
          { raion: "/rakhiv-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Закарпатській області" },
          { oblast: "/zakarpatska" },
        ]}
        forthFilter={[]}
        fifthFilter={[{ title: "Все житло в Карпатах" }, { place: "all" }]}
      />
      <p
        style={{
          color: "#2e2e2e",
          textAlign: "justify",
          fontSize: "14px",
          fontWeight: "300",
          lineHeight: "21px",
        }}
      >
        Глемпінги у Рахівському районі розташовані в наймальовничіших локаціях,
        оточених величними горами та зеленими лісами. Це ідеальне місце для тих,
        хто шукає спокій та відокремленість від міської метушні. Ви зможете
        займатися піші прогулянками, кататися на велосипедах або просто
        насолоджуватися атмосферою природи біля вогнища під зоряним небом.
        Екологічний аспект глемпінгів також заслуговує на увагу. Багато з них
        впроваджують енергозберігаючі технології та стежать за мінімізацією
        впливу на навколишнє середовище, що робить ваш відпочинок більш свідомим
        і відповідальним. Окрім природних красот, Рахівський район також
        пропонує багатий культурний досвід. Багато глемпінгів організовують
        кулінарні майстер-класи, де ви зможете скуштувати традиційні гуцульські
        страви і дізнатися більше про місцеві звичаї. Це додасть вашій подорожі
        неповторний колорит і незабутні спогади.
      </p>
    </RealtyPage>
  );
}
