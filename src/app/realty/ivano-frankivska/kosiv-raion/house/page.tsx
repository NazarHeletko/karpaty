import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Будинки для відпочинку у Косівському районі | Мої Карпати",
  description:
    "Будинки для відпочинку у Косівському районі – це затишок серед природи Карпат. Сучасні зручності, чудові краєвиди, сауна та басейн створюють ідеальні умови для спокійного відпочинку. Пориньте у красу Гуцульщини та насолоджуйтеся комфортом далеко від міської метушні.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Косівському районі" },
          { raion: "/kosiv-raion", type: "house" },
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
        Косівський район пропонує чудові умови для відпочинку в Карпатах. Тут ви
        знайдете будинки, які поєднують комфорт із красою гір. Кожен будинок має
        все необхідне для затишного перебування: зручні кімнати, сучасну техніку
        та мальовничі краєвиди. Відпочинок у Косові дарує можливість провести
        час на природі, відвідати місцеві визначні місця, такі як водоспади, та
        насолодитися тишею гір. Будинки розташовані неподалік популярних
        туристичних маршрутів, що дозволяє легко організувати походи. Обирайте
        будинок для відпочинку в Косівському районі, щоб провести незабутні дні
        серед природи Карпат.
      </p>
    </RealtyPage>
  );
}
