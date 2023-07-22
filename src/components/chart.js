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
    labels: ['$0','$100','$300','$0','$100','$300'],
    datasets: [
      {
        label: "",
        data: [20,25,34,40,60,65],
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
        <div className="h-56 md:h-96">
          <p className="text-2xl font-bold">Contribution Overtime</p>
          <Bar type="bar" height={300} width={400} data={data} />
        </div>
    </>
  );
}
