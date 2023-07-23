import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Barchart() {
  const data = {
    labels: ["$0", "$100", "$300", "$0", "$100", "$300"],
    datasets: [
      {
        label: "",
        data: [20, 25, 34, 40, 60, 65],
        backgroundColor: [
          "rgba(249, 19, 19, 0.8)",
          "rgba(12, 165, 221, 0.87)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 126, 59, 0.8)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
        <div className="h-64 md:h-96">
          <p className="text-2xl font-bold">Contribution Overtime</p>
        {/* <div className="md:hidden flex justify-between items-center">
          <div className="py-1">
            <div className="px-1 h-2 w-4 rounded bg-indigo-600"></div>
            <p className="text-gray-400">Imployer</p>
            <p className="text-gray-400 text-sm font-bold ">$73,500</p>
          </div>
          <div className="py-1">
            <div className="px-1 h-2 w-4 rounded bg-indigo-600"></div>
            <p className="text-gray-400">59%</p>
            <p className="text-gray-400 text-sm font-bold ">Goal Achieved</p>
          </div>
          <div className="py-1">
            <div className="px-1 h-2 w-4 rounded bg-indigo-600"></div>
            <p className="text-gray-400">59%</p>
            <p className="">Goal Achieved</p>
          </div>
        </div> */}
        <Bar type="bar" height={300} width={400} data={data} />
      </div>
    </>
  );
}
