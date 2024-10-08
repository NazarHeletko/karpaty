import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Котеджі у Львівській області: насолоджуйтесь красою Карпат| Мої Карпати",
  description:
    "Відкрийте для себе затишні котеджі у Львівській області: комфортний відпочинок у Карпатах, мальовничі пейзажі та активний відпочинок на природі!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={""}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Львівській області" },
          { oblast: "/lvivska", type: "cottage" },
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
        Вибір котеджу у Львівській області — це чудовий спосіб насолодитися
        відпочинком у комфортних умовах. Тут ви зможете насолоджуватися повною
        приватністю, розпоряджатися своїм часом на власний розсуд і готувати
        улюблені страви, не турбуючись про сусідів. Атмосфера домашнього
        затишку, створена дерев'яними стінами, теплим каміном і м'якими меблями,
        допоможе вам повністю розслабитися після активного дня. Котеджі часто
        розташовані в живописних місцях з панорамними видами на гори, ліси або
        річки, що дозволяє вам насолоджуватися красою Карпат прямо з вікна. Це
        також ідеальний варіант для сімейного відпочинку. Діти можуть безпечно
        гратися на свіжому повітрі, а дорослі зможуть відпочити разом. Наявність
        кухні дає можливість готувати смачні страви, що є особливо зручним для
        сімей з маленькими дітьми або тих, хто дотримується специфічних дієт.
        Багато котеджних комплексів також пропонують додаткові послуги, такі як
        сауна, басейн, мангал і прокат велосипедів, що дозволяє зробити ваш
        відпочинок ще більш активним і різноманітним.
      </p>
    </RealtyPage>
  );
}
