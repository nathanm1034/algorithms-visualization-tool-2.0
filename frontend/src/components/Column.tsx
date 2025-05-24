interface ColumnProps {
    value: number;
}

export default function Column({ value }: ColumnProps) {
    const height = `${value * 2}px`;

    return (
        <div
            className="column"
            style={{
                width: "200px",
                height,
                background: "#4f8ef7",
                borderRadius: "4px 4px 0 0",
                transition: "height 0.3s",
                display: "inline-block",
            }}
        />
    );
}
