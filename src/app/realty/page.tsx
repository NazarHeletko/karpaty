import FilterRealty from "@/components/Page/RealtyPage/FilterRealty/FilterRealty";
import RealtyItems from "@/components/Page/RealtyPage/RealtyItems/RealtyItems";
import RealtyPage from "@/components/Page/RealtyPage/RealtyPage";

export default function Realty() {
  return (
    <RealtyPage>
      <FilterRealty />
      <RealtyItems />
    </RealtyPage>
  );
}
