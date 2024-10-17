import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Оренда котеджів в Ужгородському районі – Комфорт і природа Закарпаття | Мої Карпати",
  description:
    "Оренда затишних котеджів в Ужгородському районі. Насолоджуйтеся комфортним відпочинком серед природи Закарпаття. Ідеальні умови для сімейного відпочинку, релаксу та активного дозвілля",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі в Ужгородському районі" },
          { raion: "/uzhhorod-raion", type: "cottage" },
        ]}
        secondFilter={[
          { title: "Житло в Ужгородському районі" },
          { raion: "/uzhhorod-raion" },
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
        Котеджі в Ужгородському районі – ідеальний вибір для тих, хто прагне
        відпочинку серед природи із сучасним комфортом. Розташовані в
        мальовничих куточках, ці будиночки пропонують повне усамітнення та
        затишок. Кожен котедж оснащений усім необхідним: від просторих кімнат і
        сучасної техніки до терас з видом на гори та зони для барбекю.
        Відпочинок у цьому регіоні Закарпаття чудово підходить для активних
        туристів: тут можна організувати походи в гори, велопрогулянки чи
        відвідати місцеві визначні пам'ятки, такі як Ужгородський замок або
        термальні джерела. Якщо ви шукаєте поєднання природи, спокою та
        комфорту, котеджі в Ужгородському районі забезпечать вам незабутній
        відпочинок.
      </p>
    </RealtyPage>
  );
}
