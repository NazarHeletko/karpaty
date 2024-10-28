import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бази відпочинку у Надвірнянському районі | Мої Карпати",
  description:
    "Бази відпочинку у Надвірнянському районі пропонують ідеальний варіант для тих, хто бажає насолодитися красою Карпат. Тут ви знайдете комфортні котеджі та затишні номери, що забезпечать приємний відпочинок для сімей, пар і друзів. Чудова природа, активні розваги та можливості для релаксації подарують вам незабутні враження та відчуття гармонії з навколишнім світом.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/nadvirna-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Надвірнянському районі" },
          { raion: "/nadvirna-raion", type: "base" },
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
        Відпочинок тут відкриває безліч можливостей для активного дозвілля. Під
        час літніх місяців ви зможете насолодитися пішею прогулянками
        мальовничими стежками, катанням на велосипедах чи риболовлею. Взимку
        регіон пропонує відмінні умови для лижного спорту та сноубордингу. Бази
        відпочинку також організовують екскурсії, які дозволять вам дізнатися
        більше про культуру та історію цього прекрасного краю. Обираючи базу
        відпочинку у Надвірнянському районі, ви отримуєте можливість вирватися з
        метушні повсякдення, насолодитися чистим повітрям і затишком природи. Це
        місце ідеально підходить для сімейного відпочинку, романтичних вікендів
        або зустрічей з друзями, де ви зможете створити незабутні спогади про
        ваші пригоди у Карпатах.
      </p>
    </RealtyPage>
  );
}
