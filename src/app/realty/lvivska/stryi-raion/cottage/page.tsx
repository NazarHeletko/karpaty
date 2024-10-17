import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Котеджі у Стрийському районі: Ідеальне поєднання комфорту та природи | Мої Карпати",
  description:
    "Котеджі у Стрийському районі – це чудовий вибір для відпочинку в Карпатах. Затишні будинки з усіма зручностями, неймовірні краєвиди та широкий вибір активних розваг забезпечать вам незабутній відпочинок на природі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/stryi-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Стрийському районі" },
          { raion: "/stryi-raion", type: "cottage" },
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
        Тут ви знайдете комфортні будинки, що гармонійно вписані в оточення
        мальовничих гірських пейзажів. Прекрасно облаштовані котеджі мають все
        необхідне для вашого відпочинку: просторі кімнати, сучасні кухні та
        затишні тераси, з яких можна милуватися неймовірними видами Карпат.
        Стрийський район пропонує безліч можливостей для активного відпочинку.
        Ви зможете вирушити на прогулянки гірськими стежками, досліджувати
        велосипедні маршрути або просто насолоджуватися тишею і чистим гірським
        повітрям. У холодну пору року доступні зимові розваги – лижі та
        сноуборд. Вибравши котеджі у Стрийському районі, ви отримаєте унікальну
        можливість поєднати комфортний відпочинок із зануренням у красу
        карпатської природи, зробивши свою подорож незабутньою.
      </p>
    </RealtyPage>
  );
}
