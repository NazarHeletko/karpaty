import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";
import { promises as fs } from 'fs';


export const metadata: Metadata = {
  title:
    "Житло у Карпатах | будиночки, готелі, котеджі, відпочинкові комплекси| Мої Карпати",
  description:
    "Тут знайдете найкращі варіанти проживання у Карпатах: затишні будиночки, котеджі та готелі на будь-який смак. Комфортний відпочинок серед мальовничих Карпат. Відпочинок у Карпатах стане незабутнім.",
};




export default async function Realty() {
  const data = await fs.readFile(process.cwd() + '/src/data/realty.json', 'utf8');
  const realty = JSON.parse(data);
  console.log(realty)
  return (
    <RealtyPage>
      <FilterRealty />
      <RealtyItems realtyData={realty}/>
    </RealtyPage>
  );
}
