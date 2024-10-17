import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Зручні бази відпочинку Самбірського району | Мої Карпати",
  description:
    "Затишні бази відпочинку у Самбірському районі – це ваш ідеальний вибір для релаксу на природі. Сучасні умови, приголомшливі краєвиди та безліч можливостей для активного відпочинку чекають на вас у серці Карпат!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку у Самбірському районі" },
          { raion: "/sambir-raion", type: "base" },
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
        Вибираючи базу відпочинку, ви отримуєте можливість насолодитися
        сучасними зручностями в оточенні природи. Тут є все необхідне: зручні
        номери, кухні для самостійного приготування їжі та затишні зони для
        відпочинку. Для активних туристів доступні різноманітні види розваг: від
        пішохідних маршрутів до велосипедних прогулянок, що дозволяє повною
        мірою насолодитися красою навколишнього середовища. Самбірський район
        ідеально підходить для сімейного відпочинку або романтичних вікендів,
        адже тут панує спокійна атмосфера та гармонія з природою. Обираючи бази
        відпочинку у цьому регіоні, ви отримаєте унікальний досвід, наповнений
        комфортом і природною красою.
      </p>
    </RealtyPage>
  );
}
