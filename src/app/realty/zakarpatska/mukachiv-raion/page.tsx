import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Житло в Мукачівському районі: комфортні варіанти для вашого відпочинку | Мої Карпати",
  description:
    "Відкрийте для себе затишне житло в Мукачівському районі! Пропонуємо широкий вибір варіантів: від комфортних готелів до приватних будинків. Насолоджуйтеся природою, місцевими традиціями та незабутніми враженнями в серці Закарпаття.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/mukachiv-raion"}
        city={""}
        building={""}
      />
      <RealtyItems
        firstFilter={[
          { title: "Нерухомість у Мукачівському районі" },
          { raion: "/mukachiv-raion" },
        ]}
        secondFilter={[
          { title: "Житло у Закарпатській області" },
          { oblast: "/zakarpatska" },
        ]}
        thirdFilter={[]}
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
        Чому варто вибрати житло в Мукачівському районі? Мальовнича природа
        Мукачівського району вражає своєю красою, даруючи можливості для
        захоплюючих піших і велопрогулянок, риболовлі та відпочинку на березі
        озер. Цей регіон славиться своєю історичною спадщиною. Величний
        Мукачівський замок, красиві палаци, костели і церкви створюють
        атмосферу, наповнену історією та культурою. Крім того, Мукачівський
        район відомий своїми термальними водами, які мають цілющі властивості.
        Це ідеальне місце для релаксації і оздоровлення. Інфраструктура району
        розвинута, з безліччю кафе, ресторанів, магазинів та готелів, що
        забезпечують комфортний відпочинок. Гостинність місцевих жителів також
        робить цей регіон особливим. Мешканці завжди раді вітати гостей і
        діляться своїми традиціями та культурою. Обираючи житло в Мукачівському
        районі, ви отримуєте унікальну можливість насолодитися природою,
        історією та комфортом для незабутнього відпочинку.
      </p>
    </RealtyPage>
  );
}
