import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Бази відпочинку в Ужгородському районі – Ідеальне місце для релаксу та активного дозвілля | Мої Карпати",
  description:
    "Знайдіть ідеальні бази відпочинку в Ужгородському районі для незабутнього релаксу та активного проведення часу. Комфортне проживання, прекрасні краєвиди та різноманітні розваги для сімей і компаній.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={""}
        building={"/base"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Бази відпочинку в Ужгородському районі" },
          { raion: "/uzhhorod-raion", type: "base" },
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
        Бази відпочинку в Ужгородському районі — це ідеальне місце для тих, хто
        прагне гармонії з природою та комфортного відпочинку. Цей регіон
        пропонує безліч варіантів для розслаблення: від затишних котеджів до
        сучасних комплексів з усіма зручностями. Тут кожен знайде місце, яке
        відповідає його потребам та очікуванням. Сімейні подорожі, романтичні
        вікенди чи відпочинок з друзями — бази в Ужгородському районі пропонують
        усе необхідне для незабутнього дозвілля. На гостей чекають зручні
        будиночки, облаштовані мангальні зони, басейни, сауни та навіть дитячі
        майданчики для найменших гостей. Для тих, хто любить активний
        відпочинок, доступні піші маршрути, велопрогулянки, риболовля, а взимку
        — катання на лижах. Ужгородський район також відомий своїми визначними
        місцями: тут можна відвідати старовинні замки, термальні джерела,
        Лумшорські водоспади та інші природні й культурні пам'ятки. Відпочинок
        на базах цього регіону дозволяє поєднати спокійний релакс із захопливими
        пригодами.
      </p>
    </RealtyPage>
  );
}
