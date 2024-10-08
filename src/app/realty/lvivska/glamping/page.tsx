import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Незабутній глемпінг у Львівських Карпатах: Комфорт серед природи",
  description:
    "Відкрийте для себе глемпінги у Львівській області на території Карпат! Насолоджуйтесь комфортом в обладнаних наметах серед мальовничих гір, з чудовими можливостями для активного відпочинку та релаксації. Унікальна атмосфера природи, сучасні зручності та незабутні враження чекають на вас.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={""}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Львівській області" },
          { oblast: "/lvivska", type: "glamping" },
        ]}
        secondFilter={[
          { title: "Житло у Львівській області" },
          { oblast: "/lvivska" },
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
        Глемпінги у Львівській області: комфортний відпочинок на лоні природи!
        Залиште повсякденність позаду та пориньте у світ затишку і краси
        карпатських пейзажів. Наші глемпінги – це не просто намети, а стильні та
        комфортні оазиси, які забезпечать вам всі зручності для незабутнього
        відпочинку. Активний відпочинок: Відправляйтесь на прогулянки гірськими
        маршрутами, катайтесь на велосипедах, насолоджуйтесь риболовлею або
        збирайте гриби та ягоди в чудових околицях. Тут кожен знайде щось
        цікаве! Особливості регіону: Львівська область славиться своїми
        мінеральними водами. Глемпінги, розташовані неподалік від джерел,
        надають можливість поєднати відпочинок із лікувальними процедурами, що
        зробить ваше перебування ще більш приємним. Сезонні активності: Взимку
        наші гості можуть насолоджуватись лижами і сноубордами, а влітку –
        купанням у гірських річках та спілкуванням з природою. Привабливі
        зображення: Яскраві фотознімки глемпінгів та навколишніх краєвидів
        допоможуть уявити ваш відпочинок ще до приїзду.
      </p>
    </RealtyPage>
  );
}
