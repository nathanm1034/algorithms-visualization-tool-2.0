interface ArrayContainerProps {
    array: number[];
}

export default function ArrayContainer({ array }: ArrayContainerProps) {
    console.log(array);
    return <div></div>;
}
