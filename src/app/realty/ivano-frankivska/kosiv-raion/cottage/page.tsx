import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Котеджі у Косівському районі | Мої Карпати",
  description:
    "Затишні котеджі в Косівському районі Карпат. Комфортне проживання, мальовничі краєвиди, активний відпочинок: походи, велопрогулянки, лижі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Косівському районі" },
          { raion: "/kosiv-raion", type: "cottage" },
        ]}
        secondFilter={[
          { title: "Житло у Косівському районі" },
          { raion: "/kosiv-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
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
        Котеджі в Косівському районі пропонують різноманітні варіанти для
        гостей: від невеликих будинків для романтичного відпочинку до великих
        котеджів для сімей чи груп друзів. Кожен котедж облаштований
        зручностями, такими як сучасна кухня, затишна вітальня та спальні з
        краєвидами на гори. Активний відпочинок тут – одна з головних переваг. У
        теплу пору року ви можете досліджувати гори, брати участь у велосипедних
        турах або спробувати себе в рафтингу на річці Прут. Взимку доступні
        лижні траси та катання на сноуборді. Вибір котеджів у Косівському районі
        – це можливість відчути красу Карпат, насолодитися спокоєм природи та
        провести незабутні дні в оточенні гір.
      </p>
    </RealtyPage>
  );
}
