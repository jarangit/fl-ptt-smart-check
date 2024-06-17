import { Grid, ListItem } from "@mui/material";
import MyPieChart from "../components/charts/myPieChart";

const mockDate = {
  sheet: [
    {
      title: 'TOTAL',
      total: 142,
      detail: `TOTAL 143
In Progress 72 , Completed 73`,
      data: [
        { name: 'Group A', value: 700 },
        { name: 'Group B', value: 500 },
      ]
    },
    {
      title: 'CHECK SHEET START EQUIPMENT',
      total: 55,
      detail: `TOTAL 55
In Progress 32 , Completed 25`,
      data: [
        { name: 'Group A', value: 100 },
        { name: 'Group B', value: 500 },
      ]
    },
    {
      title: 'LOADING CHEMICAL',
      total: 88,
      detail: `TOTAL 88
In Progress 40 , Completed 48`,
      data: [
        { name: 'Group A', value: 900 },
        { name: 'Group B', value: 500 },
      ]
    },
  ],
  ml1: [
    {
      title: 'TOTAL',
      total: 142,
      detail: `TOTAL 143
In Progress 72 , Completed 73`,
      data: [
        { name: 'Group A', value: 360 },
        { name: 'Group B', value: 500 },
      ]
    },
    {
      title: 'CHECK SHEET START EQUIPMENT',
      total: 55,
      detail: `TOTAL 55
In Progress 32 , Completed 25`,
      data: [
        { name: 'Group A', value: 510 },
        { name: 'Group B', value: 500 },
      ]
    },
    {
      title: 'CHECK SHEET START EQUIPMENT',
      total: 55,
      detail: `TOTAL 55
In Progress 32 , Completed 25`,
      data: [
        { name: 'Group A', value: 100 },
        { name: 'Group B', value: 500 },
      ]
    },
    {
      title: 'LOADING CHEMICAL',
      total: 88,
      detail: `TOTAL 88
In Progress 40 , Completed 48`,
      data: [
        { name: 'Group A', value: 700 },
        { name: 'Group B', value: 500 },
      ]
    },
  ],
}
export default function Home() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* header */}
      <div className="bg-white border shadow-sm p-3 text-center text-xl font-medium rounded-md">PLANT GSP 1</div>

      {/* smart check sheet */}
      <div className="flex flex-col gap-3">
        <div className="bg-white p-3 border shadow-sm  overflow-hidden relative">
          <div className="pl-6 font-medium"> SMART CHECK SHEET</div>
          <div className="w-6 h-24 bg-main absolute left-0 top-0"></div>
        </div>
        {/* list chart */}
        <div className="text-blue-300">{'Work (Success & In Progress)'}</div>

        <div className="flex gap-12">
          {mockDate.sheet.map((item, key) => (
            <div key={key} className="flex flex-col gap-0 justify-center items-center text-center">
              <div>{item.title}</div>
              <MyPieChart data={item.data} />
              <div>{item.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ML1 */}
      <div className="flex flex-col gap-3">
        <div className="bg-white p-3 border shadow-sm  overflow-hidden relative">
          <div className="pl-6 font-medium"> ML1</div>
          <div className="w-6 h-24 bg-main absolute left-0 top-0"></div>
        </div>
        {/* list chart */}
        <div className="text-blue-300">{'Work (Success & In Progress)'}</div>

        <div className="flex gap-12">
          {mockDate.ml1.map((item, key) => (
            <div key={key} className="flex flex-col gap-0 justify-center items-center text-center">
              <div>{item.title}</div>
              <MyPieChart data={item.data} />
              <div>{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
