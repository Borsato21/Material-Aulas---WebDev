import { Button } from "@/components/ui/button"
import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoPizza } from "@/components/GraficoPizza";

export default function Relatorios() {

  function handleClick(){
    alert("Clicou!")
  }
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <p className="mt-2 text-gray-600">Página de relatórios.</p>
      <br />
      <Button onClick={handleClick} >Click me</Button>
      <br /><br />
      <div className="grid grid-cols-2">
        <GraficoBarras></GraficoBarras>
        <GraficoPizza></GraficoPizza>
      </div>
      
    </div>
  );
}
