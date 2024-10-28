import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Глемпінг у Косівському районі | Мої Карпати",
  description:
    "Глемпінг у Косівському районі – це унікальний відпочинок на природі з усіма зручностями. Комфортабельні намети серед карпатських ландшафтів дозволяють насолоджуватися красою природи, не відмовляючись від комфортного проживання.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Косівському районі" },
          { raion: "/kosiv-raion", type: "glamping" },
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
        Розташовані серед красивих карпатських пейзажів, глемпінг-майданчики
        дозволяють зануритися в атмосферу природи, не втрачаючи комфорту
        сучасного життя. В наметах ви знайдете зручні ліжка, електрику та навіть
        душ, що забезпечить вам затишок під час відпочинку. Глемпінг у
        Косівському районі – це також можливість для активного відпочинку. Ви
        зможете вирушити на піші прогулянки, насолоджуючись мальовничими
        краєвидами, або відвідати місцеві атракції. Вечорами можна провести час
        біля вогнища, слухаючи звуки природи.
      </p>
    </RealtyPage>
  );
}
