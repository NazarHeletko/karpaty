import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Затишні котеджі Самбірського району: Ваш ідеальний відпочинок у серці Карпат | Мої Карпати",
  description:
    "Відкрийте для себе затишні котеджі у Самбірському районі Карпат. Насолоджуйтесь комфортним відпочинком серед гір, чистим повітрям та мальовничими краєвидами. Ідеальне місце для релаксу та втечі від міської метушні!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Самбірському районі" },
          { raion: "/sambir-raion", type: "cottage" },
        ]}
        secondFilter={[
          { title: "Житло у Самбірському районі" },
          { raion: "/sambir-raion" },
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
        Котеджі у Самбірському районі Карпат – це ідеальне місце для спокійного
        відпочинку. Цей регіон вражає своєю природною красою, а котеджі
        пропонують комфорт і затишок, що робить їх ідеальними для сімейного
        відпочинку або вікендів з друзями. Оренда котеджу дозволяє насолодитися
        усіма принадами гірського життя. Ви зможете відправитися на піші
        прогулянки, досліджувати мальовничі стежки або просто відпочити біля
        каміна, насолоджуючись гарним видом на гори. Улітку ви зможете
        зануритися у природу, а взимку – насолоджуватися лижними курортами
        неподалік. Затишні котеджі у Самбірському районі запрошують вас на
        відпочинок, де ви зможете забути про повсякденні турботи і насолодитися
        красою Карпат.
      </p>
    </RealtyPage>
  );
}
