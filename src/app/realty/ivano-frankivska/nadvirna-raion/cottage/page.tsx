import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Котеджі для відпочинку у Надвірнянському районі | Мої Карпати",
  description:
    "Котеджі для відпочинку у Надвірнянському районі – це комфортний відпочинок у мальовничих Карпатах. Просторі та сучасні котеджі забезпечують затишок і всі необхідні зручності, а краса навколишньої природи дарує можливість для повної релаксації та активних розваг.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/nadvirna-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Надвірнянському районі" },
          { raion: "/nadvirna-raion", type: "cottage" },
        ]}
        secondFilter={[
          { title: "Житло у Надвірнянському районі" },
          { raion: "/nadvirna-raion" },
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
        Котеджі для відпочинку у Надвірнянському районі – це чудове місце для
        тих, хто шукає комфорт та затишок серед величної краси Карпат. Ці
        котеджі створені для повного релаксу: просторі кімнати, сучасні
        зручності, панорамні вікна з видом на гори – все це робить відпочинок
        максимально приємним. Надвірнянський район приваблює не лише своєю
        природою, але й можливостями для активного відпочинку. Відвідувачі
        можуть вирушити на піші прогулянки гірськими стежками, покататися на
        велосипедах або просто насолоджуватися тишею та спокоєм. Взимку регіон
        перетворюється на справжню знахідку для лижників та сноубордистів
        завдяки близькості до гірськолижних курортів.
      </p>
    </RealtyPage>
  );
}
