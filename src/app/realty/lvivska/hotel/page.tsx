import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Готелі Львівщини: ідеальне місце для відпочинку в Карпатах| Мої Карпати",
  description:
    "Відкрийте для себе комфортні готелі у Львівській області на території Карпат. Насолоджуйтесь природою, сучасними зручностями та активним відпочинком у серці гір!",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={""}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі у Львівській області" },
          { oblast: "/lvivska", type: "hotel" },
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
        Досліджуйте найкращі готелі в Карпатах, Львівська область! Карпати — це
        не просто гірський масив, а справжній куточок природи, наповнений
        чудовими краєвидами і свіжим повітрям, який дарує безліч можливостей для
        активного відпочинку. Львівщина вражає своєю культурною спадщиною і
        природними красотами, пропонуючи різноманітні варіанти для затишного і
        комфортного проживання. Обираючи готель у Карпатах, ви отримуєте
        можливість насолоджуватися комфортом сучасного сервісу, не відмовляючись
        від близькості до природи. Від гірськолижних курортів до пішохідних
        маршрутів, від велопрогулянок до риболовлі — тут є активності для
        кожного. Численні готелі, розташовані біля лікувальних мінеральних
        джерел, пропонують широкий спектр оздоровчих процедур. А на додаток,
        місцева кухня, що поєднує традиційні рецепти та свіжі інгредієнти,
        забезпечить справжнє гастрономічне задоволення. Не забувайте також про
        можливість зануритися в культурні скарби регіону — відвідайте історичні
        місця, музеї та традиційні ярмарки, щоб відчути дух Львівщини.
      </p>
    </RealtyPage>
  );
}
