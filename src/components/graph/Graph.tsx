import { LineChart, Line, ResponsiveContainer } from "recharts";
import "./Graph.css";


function Graph({ priceHistory, stroke, strokeWidth, dataKey, dot, width, height }: any) {
    console.log(stroke)
    return (
        <div className="graph">
            <ResponsiveContainer height={ height } width={width} >
                <LineChart data={ priceHistory }>
                    <Line dataKey={dataKey} dot={dot} stroke={stroke} strokeWidth={strokeWidth} />
                </LineChart>
            </ResponsiveContainer>  
        </div>
    );
}

export default Graph;