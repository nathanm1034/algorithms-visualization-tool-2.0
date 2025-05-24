interface ControlsProps {
    arraySize: number;
    onArraySizeChange: (size: number) => void;
    onGenerateNewArray: () => void;
    speed: "slow" | "normal" | "fast";
    onSpeedChange: (newSpeed: "slow" | "normal" | "fast") => void;
    stepMode: boolean;
    onStepModeToggle: () => void;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls(props: ControlsProps) {
    console.log(props);
    return <div></div>;
}
