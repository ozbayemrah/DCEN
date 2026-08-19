import PlainPanel from '../components/ui/PlainPanel'
import EnergyMapPanel from '../components/panels/EnergyMapPanel'
import { KAINDORF_AN_DER_SULM, LEIBNITZ_AREA, LEIBNITZ_CENTER } from '../lib/mapLocations'

export default function Overview() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-[auto_1fr] gap-4">
      <EnergyMapPanel title="Source Terminal" {...LEIBNITZ_AREA} />
      <EnergyMapPanel title="Heat Map" {...LEIBNITZ_CENTER} />
      <EnergyMapPanel title="RES Map" {...KAINDORF_AN_DER_SULM} />
      <PlainPanel title="General Source Terminal" className="col-span-2 justify-center" />
      <PlainPanel title="Usage Terminal" className="justify-center" />
    </div>
  )
}
