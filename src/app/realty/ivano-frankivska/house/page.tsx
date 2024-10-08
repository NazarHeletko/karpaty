import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Затишні будинки для відпочинку в горах Івано-Франківської області | Мої Карпати",
  description:
    "Комфортні будинки для відпочинку у горах Івано-Франківської області! Насолоджуйтесь приголомшливими краєвидами та активним відпочинком на природі. Ідеально для сімейного або романтичного вікенду!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={""}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки в Івано-Франківській області" },
          { oblast: "/ivano-frankivska", type: "house" },
        ]}
        secondFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
        ]}
        thirdFilter={[]}
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
        Відпочинок у будиночках Карпат: затишок та природа в Івано-Франківській
        області. Івано-Франківська область є ідеальним місцем для любителів
        гірського відпочинку та тиші. Серед захоплюючих пейзажів Карпат
        розташовані численні затишні будинки, готові прийняти вас у своє тепло.
        Чому варто обрати будинок для відпочинку в Карпатах? Вибір на будь-який
        смак: Ви знайдете будинки різної площі та кількості кімнат, що дозволить
        підібрати оптимальний варіант під ваші потреби. Додаткові можливості:
        Багато з цих будинків пропонують різноманітні зручності, такі як сауна,
        басейн, мангали для приготування їжі та дитячі майданчики, щоб
        забезпечити комфортний відпочинок для всієї родини.
      </p>
    </RealtyPage>
  );
}
