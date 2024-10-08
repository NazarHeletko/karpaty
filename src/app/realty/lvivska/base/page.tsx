import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Бази відпочинку у Львівській області: насолоджуйтесь природою Карпат | Мої Карпати",
  description:
    "Відпочиньте у мальовничих Карпатах на базах у Львівській області. Тут ви знайдете комфортні умови, красиві пейзажі та безліч активностей, від піших прогулянок до катання на лижах. Заплануйте незабутній відпочинок у природному раю!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={""}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Львівській області" },
          { oblast: "/lvivska", type: "base" },
        ]}
        secondFilter={[
          { title: "Житло у Львівській області" },
          { oblast: "/lvivska" },
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
        Відпочинок у Карпатах: Бази для справжнього релаксу серед гірської
        природи у Львівській області. Карпати – це не просто гори, а справжнє
        диво природи, де кожен куточок дихає спокоєм і свіжістю. Бази відпочинку
        у Львівській області забезпечують комфортні умови для того, щоб ви могли
        насолоджуватися цим раєм у повній мірі. Чому варто обрати базу для
        відпочинку в Львівській області? Природа без обмежень: Оточені пишними
        лісами та чистими річками, ви зможете насолоджуватися захоплюючими
        краєвидами та свіжим повітрям, що відновить ваші сили. Різноманіття
        активностей: Незалежно від ваших уподобань, у Карпатах знайдеться щось
        для кожного – від піших походів і велосипедних прогулянок до зимових
        розваг, таких як лижі та сноуборд. Затишок і комфорт: Бази відпочинку у
        Львівській області пропонують сучасні зручності: від затишних кімнат до
        обладнаних кухонь, що забезпечить вам домашній затишок навіть на
        природі. Справжня карпатська гастрономія: Ласуйте традиційними стравами
        з місцевих продуктів у затишних ресторанах, де кожен прийом їжі стає
        святом смаку. Доступність та вигода: Відпочинок на базі – це чудовий
        варіант для тих, хто шукає комфорт за прийнятною ціною, без шкоди для
        вражень та атмосфери.
      </p>
    </RealtyPage>
  );
}
