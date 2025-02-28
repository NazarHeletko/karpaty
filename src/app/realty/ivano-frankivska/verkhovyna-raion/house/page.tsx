import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Будинки для відпочинку у Верховинському районі | Мої Карпати",
  description:
    "Будинки для відпочинку у Верховинському районі пропонують комфортне проживання в серці Карпат. Затишні котеджі забезпечують всі зручності для релаксації та активного відпочинку. Насолоджуйтесь мальовничими пейзажами, займаючись піші прогулянками, лижним спортом або досліджуючи місцеві пам'ятки. Ідеальне місце для сімейного відпочинку та зустрічей з друзями.",
};

export const revalidate = 0;

export default async function Realty() {
  return (
    <RealtyPage>
      <FilterRealty
        oblast={"/ivano-frankivska"}
        raion={"/verkhovyna-raion"}
        city={""}
        building={"/house"}
      />
      <RealtyItems
        firstFilter={[
          { title: "Будинки у Верховинському районі" },
          { raion: "/verkhovyna-raion", type: "house" },
        ]}
        secondFilter={[
          { title: "Житло у Верховинському районі" },
          { raion: "/verkhovyna-raion" },
        ]}
        thirdFilter={[
          { title: "Житло у Івано-Франківській області" },
          { oblast: "/ivano-frankivska" },
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
        Верховинський район – це справжня перлина Карпат, де природа сплітається
        з комфортом. Будинки для відпочинку, сховані серед величних гір,
        запрошують вас насолодитися усім багатством цього куточка України. Кожен
        котедж стає вашим маленьким раєм, де ви зможете відчути затишок
        домашнього вогнища та магію карпатських пейзажів. Усередині будинків
        панує тепла атмосфера: м’які ліжка, стильний декор і зручні зони для
        відпочинку створюють ідеальні умови для релаксації. Тут легко забути про
        повсякденні турботи та насолодитися моментами разом з родиною або
        друзями. Приготування їжі на кухні стає справжнім мистецтвом, адже ви
        зможете експериментувати з традиційними карпатськими рецептами, а
        вечірня трапеза на терасі, під зоряним небом, залишить незабутні
        враження. Верховина дарує своїм гостям безмежні можливості для активного
        відпочинку. Літні прогулянки стежками, оточеними квітучими лугами та
        сосновими лісами, заряджають енергією та дарують неперевершені краєвиди.
        Зимові місяці перетворюють цей край на справжній зимовий рай: лижні
        траси та сноубордичні спуски чекають на любителів адреналіну. Обираючи
        будинки для відпочинку у Верховинському районі, ви отримуєте не лише
        комфорт, але й можливість поринути в атмосферу карпатського життя, де
        кожен ранок починається з шуму лісу, а кожен вечір закінчується під
        музику природи. Це місце, де ви зможете створити спогади, які залишаться
        з вами на все життя, і відчути справжню гармонію з природою.
      </p>
    </RealtyPage>
  );
}
