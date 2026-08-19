import PlainPanel from '../components/ui/PlainPanel'
import EnergyMapPanel from '../components/panels/EnergyMapPanel'
import { KAINDORF_AN_DER_SULM, LEIBNITZ_AREA, LEIBNITZ_CENTER } from '../lib/mapLocations'

export default function Overview() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:h-full lg:grid-cols-3 lg:grid-rows-[auto_1fr]">
      <EnergyMapPanel title="Source Terminal" {...LEIBNITZ_AREA} />
      <EnergyMapPanel title="Heat Map" {...LEIBNITZ_CENTER} />
      <EnergyMapPanel title="RES Map" {...KAINDORF_AN_DER_SULM} />
      <PlainPanel title="General Source Terminal" className="min-h-[240px] justify-center lg:col-span-2" />
      <PlainPanel title="Usage Terminal" className="min-h-[240px] justify-center" />
    </div>
  )
}
