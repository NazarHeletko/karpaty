import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Глемпінги у Стрийському районі | Мої Карпати",
  description:
    "Обираючи глемпінги у Стрийському районі, ви отримуєте можливість зануритися в атмосферу природи, спостерігати за зірками вночі та насолоджуватися чистим гірським повітрям. Це незабутній спосіб провести час з близькими, віддалившись від повсякденних турбот.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Стрийському районі" },
          { raion: "/stryi-raion", type: "glamping" },
        ]}
        secondFilter={[
          { title: "Житло у Стрийському районі" },
          { raion: "/stryi-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Львівській області" },
          { oblast: "/lvivska" },
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
        Глемпінги у Стрийському районі – це чудове поєднання природи та
        комфорту. Вони дозволяють насолодитися красою Карпат без відмови від
        сучасних зручностей. Затишні намети оснащені всім необхідним:
        комфортними ліжками, електрикою та ванними кімнатами. Цей формат
        відпочинку ідеально підходить для любителів активного відпочинку. У
        Стрийському районі ви знайдете безліч можливостей для піших прогулянок,
        велосипедних турів і дослідження природи. Обираючи глемпінги, ви
        отримуєте шанс насолодитися відпочинком серед краси гір, чистим повітрям
        та затишком, створюючи незабутні спогади з близькими.
      </p>
    </RealtyPage>
  );
}
