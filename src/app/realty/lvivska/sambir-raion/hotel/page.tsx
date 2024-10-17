import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Готелі Самбірщини: Відпочинок з комфортом у мальовничих Карпатах | Мої Карпати",
  description:
    "Відкрийте найкращі готелі Самбірського району для вашого відпочинку в Карпатах. Комфортні номери, чудові краєвиди та спокійна атмосфера – ідеальне місце для релаксу в горах!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Самбірському районі" },
          { raion: "/sambir-raion", type: "hotel" },
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
        Готелі Самбірського району Карпат – це місця, де поєднуються затишок і
        природа. Відпочиваючи тут, ви зможете забути про буденність і
        насолодитися спокоєм гір. Готелі пропонують різноманітні варіанти для
        розміщення – від стандартних номерів до просторих люксів з чудовими
        видами. Багато закладів забезпечують додаткові послуги: оздоровчі
        процедури, місцеву кухню, а також організацію активного відпочинку.
        Обираючи готель у Самбірському районі, ви отримуєте можливість повністю
        зануритися в атмосферу Карпат, відпочити з комфортом і насолодитися
        чистим гірським повітрям.
      </p>
    </RealtyPage>
  );
}
