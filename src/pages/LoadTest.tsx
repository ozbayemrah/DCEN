import GaugeChart from '../components/charts/GaugeChart'
import PlainPanel from '../components/ui/PlainPanel'

export default function LoadTest() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <GaugeChart className="aspect-square" label="Total Capacity" value={82} status="good" />
      <GaugeChart className="aspect-square" label="Peak Load" value={91} status="danger" />
      <GaugeChart className="aspect-square" label="Reserve Margin" value={64} status="caution" />

      <PlainPanel title="Load Test Results" className="col-span-2" />
      <PlainPanel title="Summary" />
    </div>
  )
}
