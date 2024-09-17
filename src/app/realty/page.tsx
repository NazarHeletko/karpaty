import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Житло у Карпатах | будиночки, готелі, котеджі, відпочинкові комплекси| Мої Карпати",
  description:
    "Тут знайдете найкращі варіанти проживання у Карпатах: затишні будиночки, котеджі та готелі на будь-який смак. Комфортний відпочинок серед мальовничих Карпат. Відпочинок у Карпатах стане незабутнім.",
};

export default function Realty() {
  return (
    <RealtyPage>
      <FilterRealty />
      <RealtyItems />
    </RealtyPage>
  );
}
