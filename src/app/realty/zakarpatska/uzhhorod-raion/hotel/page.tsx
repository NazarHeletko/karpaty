import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Готелі в Ужгородському районі | Мої Карпати",
  description:
    "Виберіть зручний готель в Ужгородському районі для відпочинку в атмосфері комфорту та затишку. Насолоджуйтеся гостинністю, чудовим сервісом і захоплюючими краєвидами Закарпаття. Ідеальне місце для сімейних подорожей, романтичних відпусток або активного відпочинку на природі.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/zakarpatska"}
        raion={"/uzhhorod-raion"}
        city={""}
        building={"/hotel"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Готелі в Ужгородському районі" },
          { raion: "/uzhhorod-raion", type: "hotel" },
        ]}
        secondFilter={[
          { title: "Житло в Ужгородському районі" },
          { raion: "/uzhhorod-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Закарпатській області" },
          { oblast: "/zakarpatska" },
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
        Широкий вибір: Ужгородський район пропонує велику різноманітність
        готелів, що підходять для будь-якого бюджету та вподобань. Від стильних
        бутік-готелів до розкішних курортних комплексів — тут ви знайдете те, що
        вам потрібно. Виберіть готель з живописним видом на гори, біля
        мальовничої річки або в самому серці міста. Комфорт і обслуговування:
        Готелі в цьому регіоні відрізняються високим рівнем комфорту і якісним
        сервісом. Ви будете насолоджуватися затишними номерами, смачними
        стравами, SPA-процедурами, басейнами та іншими зручностями, які зроблять
        ваше перебування приємним. Активний відпочинок: Готелі служать чудовою
        базою для активного дозвілля. Тут ви можете займатися пішими
        прогулянками, велоспортом або катанням на лижах взимку. Багато закладів
        пропонують прокат велосипедів, гірськолижного спорядження та
        організовують захоплюючі екскурсії. Гастрономічні враження: Закарпатська
        кухня вражає своєю різноманітністю та унікальними смаками. У ресторанах
        готелів ви зможете насолодитися традиційними стравами, приготованими з
        найкращих місцевих інгредієнтів. Розваги для малечі: Багато готелів
        пропонують програми для дітей, включаючи ігрові майданчики, анімаційні
        програми та міні-клуби. Це дозволяє батькам відпочивати, поки їхні діти
        весело проводять час у безпечному середовищі. Обираючи готелі в
        Ужгородському районі, ви отримуєте шанс насолодитися комфортом, красою
        природи та культурними особливостями Закарпаття, що зробить ваш
        відпочинок дійсно незабутнім.
      </p>
    </RealtyPage>
  );
}
