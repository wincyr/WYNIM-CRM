import { DonutChartCourses } from "../ui_components/DonutChart"
import { BarChartData } from "../ui_components/BarChart";
import { Card } from '@tremor/react';
import { BarListGender } from "../ui_components/BarListGender";


function Charts() {
  return (
    <div>
      <div className='mt-8'>
        <Card className="w-full max-h-full bg-base-100 shadow-md p-12 my-6"
          decoration="top"
          decorationColor="indigo">
          <BarChartData />
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6 justify-between items-stretch flex-col mx-auto">
        <Card className="w-full max-h-full bg-base-100 shadow-md p-12 my-6"
          decoration="top"
          decorationColor="indigo">
          <DonutChartCourses />
        </Card>

        <Card className="w-full max-h-full bg-base-100 shadow-md p-12 my-6"
          decoration="top"
          decorationColor="indigo">
          <BarListGender />
        </Card>
      </div>
      <div className="divider divider-neutral"></div>
    </div>
  )
}

export default Charts