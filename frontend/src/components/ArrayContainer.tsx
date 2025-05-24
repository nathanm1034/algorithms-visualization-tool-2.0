import Column from "./Column";

interface ArrayContainerProps {
    array: number[];
}

export default function ArrayContainer({ array }: ArrayContainerProps) {
    console.log(array);

    return (
        <div 
            className="array-container"
            style={{ 
                display: "flex",
                alignItems: "flex-end",
                height: "300px",
                gap: "2px"
            }}>
            {array.map((value, idx) => (
                <Column key={idx} value={value} />
            ))}
        </div>
    );
}
