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

type DataType = {
  "id": number
  "oblast": string,
  "raion": string,
  "city": string,
  "name": string,
  "price": string,
  "people-count": number,
  "title-image": string
};

// export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function Realty() {
  const data = await fs.readFile(process.cwd() + '/src/data/realty.json', 'utf8');
  const realty = JSON.parse(data);
  function shuffleArray(array:DataType[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];  // swap elements
    }
    return array;
  }
  const randomizeRealtyArray = shuffleArray(realty)
  return (
    <RealtyPage>
      <FilterRealty />
      <RealtyItems realtyData={randomizeRealtyArray}/>
    </RealtyPage>
  );
}
