import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Котеджі для відпочинку у Вижницькому районі – втеча в природу для незабутніх моментів | Мої Карпати",
  description:
    "Котеджі для відпочинку у Вижницькому районі — ідеальне місце для тих, хто шукає гармонію з природою. Комфортні котеджі, оточені неймовірними пейзажами, створять атмосферу затишку для сімейних подорожей або романтичних вікендів. Насолоджуйтесь активним відпочинком, піші прогулянками та вечорами біля каміна. Відкрийте красу Карпат і створіть незабутні спогади!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/chernivetska"}
        raion={"/vyzhnytsia-raion"}
        city={""}
        building={"/cottage"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Котеджі у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion", type: "cottage" },
        ]}
        secondFilter={[
          { title: "Житло у Вижницькому районі" },
          { raion: "/vyzhnytsia-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Чернівецькій області" },
          { oblast: "/chernivetska" },
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
        Кожен котедж — це невелика казка, в якій поєднані сучасні зручності та
        традиційний стиль. З вікон відкривається панорама, що зачаровує — гори,
        що підносяться в небесах, та лісові простори, які запрошують на
        прогулянку. Тут ви зможете насолодитися тишею, слухаючи спів птахів та
        шелест листя. Вижницький район пропонує безліч можливостей для активного
        відпочинку. Від пішохідних маршрутів, що ведуть до чарівних водоспадів,
        до лижних спусків у зимову пору — кожен знайде тут заняття до душі. А в
        теплі вечори, зібравшись біля каміна, ви зможете ділитися історіями та
        сміхом, насолоджуючись компанією близьких. Не забудьте спробувати
        місцеву кухню — смачні страви, приготовлені з любов’ю, наповнять вас
        енергією для нових відкриттів. Відвідайте культурні пам’ятки, зануртеся
        в традиції та звичаї цього чудового краю.
      </p>
    </RealtyPage>
  );
}
