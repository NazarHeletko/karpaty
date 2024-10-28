import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бази відпочинку у Косівському районі | Мої Карпати",
  description:
    "Бази відпочинку у Косівському районі пропонують комфортний відпочинок у серці Карпат. Затишні котеджі, смачні страви місцевої кухні та різноманітні активності на свіжому повітрі створюють ідеальні умови для незабутнього відпочинку.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/kosiv-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази у Косівському районі" },
          { raion: "/kosiv-raion", type: "base" },
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
        Для любителів активного відпочинку доступні прогулянки в горах,
        риболовля, а також екскурсії до природних і культурних пам'яток району.
        У літній сезон можна насолоджуватися походами та велопрогулянками, а
        взимку — катанням на лижах або сноуборді. Бази відпочинку у Косівському
        районі — це ідеальне місце для сімейного відпочинку або для друзів, що
        прагнуть провести час на природі, відновити сили та насолодитися
        незабутніми моментами.
      </p>
    </RealtyPage>
  );
}
