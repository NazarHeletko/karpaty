import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Глемпінги в Самбірському районі | Мої Карпати",
  description:
    "Глемпінги у Самбірському районі Карпат – це комфортний відпочинок серед дикої природи. Стильні намети з зручностями, мальовничі краєвиди та тиша гір роблять цей варіант ідеальним для тих, хто шукає незвичайний відпочинок на свіжому повітрі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/lvivska"}
        raion={"/sambir-raion"}
        city={""}
        building={"/glamping"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Глемпінги у Самбірському районі" },
          { raion: "/sambir-raion", type: "glamping" },
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
        Глемпінги у Самбірському районі Карпат – це справжня знахідка для тих,
        хто хоче відчути красу природи без відмови від зручностей. Ці стильні
        намети, розташовані серед живописних пейзажів, пропонують вам
        насолодитися відпочинком у комфортних умовах. Ви зможете прокидатися під
        звуки природи, вдихати чисте гірське повітря та насолоджуватися
        неймовірними краєвидами, не відмовляючись від комфорту сучасного життя.
        У глемпінгах є все необхідне: зручні ліжка, електричні прилади та навіть
        можливість приготувати їжу на відкритому повітрі. Цей формат відпочинку
        ідеально підходить для романтичних вихідних, сімейного відпочинку або
        зустрічі з друзями. Глемпінг у Самбірському районі дарує можливість
        провести час у гармонії з природою, відволіктися від повсякденних турбот
        і отримати незабутні враження.
      </p>
    </RealtyPage>
  );
}
