import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getStoredReadBooks } from "../utilitiy/localstrorage";
import { useLoaderData } from "react-router-dom";

const PageToRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const books = useLoaderData();
  
  const [data, setReadBook] = useState([])
    useEffect(()=>{
        const storedBookId = getStoredReadBooks();
        if(books.length > 0){
            const readdedBooks = [];
            for(const id of storedBookId){
                const book = books.find(book => book.id === id );
                if(book){
                    readdedBooks.push({
                        name: `${book.Name}`,
                        uv: `${book.totalPages}`,
                  
                      });

                }

            }
            setReadBook(readdedBooks);
            
        }
    },[])
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="flex justify-center items-center">
      <BarChart 
        width={1500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PageToRead;
